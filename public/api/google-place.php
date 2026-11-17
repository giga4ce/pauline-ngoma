<?php

declare(strict_types=1);

const GOOGLE_PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places/';
const GOOGLE_PLACES_FIELD_MASK = 'displayName,rating,userRatingCount,googleMapsLinks';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    header('Allow: GET');
    respondWithError(405, 'Method not allowed.');
}

if (!extension_loaded('curl')) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

$configPath = __DIR__ . '/config.php';

if (!is_file($configPath)) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

$config = require $configPath;
$googlePlaces = is_array($config) ? ($config['google_places'] ?? null) : null;

if (!is_array($googlePlaces)) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

$apiKey = trim((string) ($googlePlaces['api_key'] ?? ''));
$placeId = trim((string) ($googlePlaces['place_id'] ?? ''));
$timeoutSeconds = filter_var(
    $googlePlaces['timeout_seconds'] ?? null,
    FILTER_VALIDATE_INT,
    ['options' => ['min_range' => 1, 'max_range' => 10]]
);

if ($apiKey === '' || $placeId === '' || $timeoutSeconds === false) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

$curlHandle = curl_init(GOOGLE_PLACES_ENDPOINT . rawurlencode($placeId));

if ($curlHandle === false) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

curl_setopt_array($curlHandle, [
    CURLOPT_CONNECTTIMEOUT => min(2, $timeoutSeconds),
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'X-Goog-Api-Key: ' . $apiKey,
        'X-Goog-FieldMask: ' . GOOGLE_PLACES_FIELD_MASK,
    ],
    CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => $timeoutSeconds,
]);

$googleResponse = curl_exec($curlHandle);
$httpStatus = curl_getinfo($curlHandle, CURLINFO_RESPONSE_CODE);
$requestFailed = $googleResponse === false || curl_errno($curlHandle) !== CURLE_OK;
curl_close($curlHandle);

if ($requestFailed || $httpStatus !== 200 || !is_string($googleResponse)) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

try {
    $place = json_decode($googleResponse, true, 32, JSON_THROW_ON_ERROR);
} catch (JsonException) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

if (!is_array($place)) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

$response = mapGooglePlace($place);

if ($response === null) {
    respondWithError(503, 'Google place data is temporarily unavailable.');
}

respond(200, $response);

/**
 * @param array<string, mixed> $place
 *
 * @return array<string, int|float|string|null>|null
 */
function mapGooglePlace(array $place): ?array
{
    $rating = $place['rating'] ?? null;
    $userRatingCount = $place['userRatingCount'] ?? null;
    $links = is_array($place['googleMapsLinks'] ?? null)
        ? $place['googleMapsLinks']
        : [];

    if (
        (!is_int($rating) && !is_float($rating))
        || $rating < 1
        || $rating > 5
    ) {
        return null;
    }

    if (!is_int($userRatingCount) || $userRatingCount < 0) {
        return null;
    }

    return [
        'rating' => (float) $rating,
        'userRatingCount' => $userRatingCount,
        'placeUrl' => validateGoogleUrl($links['placeUri'] ?? null),
        'reviewsUrl' => validateGoogleUrl($links['reviewsUri'] ?? null),
        'writeReviewUrl' => validateGoogleUrl($links['writeAReviewUri'] ?? null),
    ];
}

function validateGoogleUrl(mixed $url): ?string
{
    if (!is_string($url) || filter_var($url, FILTER_VALIDATE_URL) === false) {
        return null;
    }

    $parts = parse_url($url);
    $scheme = strtolower((string) ($parts['scheme'] ?? ''));
    $host = strtolower((string) ($parts['host'] ?? ''));
    $isGoogleHost = $host === 'google.com'
        || str_ends_with($host, '.google.com')
        || $host === 'goo.gl'
        || str_ends_with($host, '.goo.gl');

    return $scheme === 'https' && $isGoogleHost ? $url : null;
}

/**
 * @param array<string, int|float|string|null> $payload
 */
function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function respondWithError(int $status, string $message): never
{
    respond($status, ['message' => $message]);
}
