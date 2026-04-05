<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');

$isLocalRequest = in_array(
    (string) ($_SERVER['REMOTE_ADDR'] ?? ''),
    ['127.0.0.1', '::1'],
    true
);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';

if (!is_file($autoloadPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Mailer dependencies are missing.',
    ]);
    exit;
}

require $autoloadPath;

$configPath = __DIR__ . '/config.php';

if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'SMTP configuration is missing.',
    ]);
    exit;
}

$config = require $configPath;

$name = trim((string) ($_POST['nom'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['telephone'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$origin = trim((string) ($_POST['origine'] ?? 'Site internet'));
$subject = trim((string) ($_POST['_subject'] ?? 'Nouvelle demande depuis le site'));
$replyTo = trim((string) ($_POST['_replyto'] ?? $email));
$honeypot = trim((string) ($_POST['_honey'] ?? ''));

if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Missing required fields.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid sender email.',
    ]);
    exit;
}

$smtp = $config['smtp'] ?? [];
$messageConfig = $config['message'] ?? [];

$requiredConfigKeys = [
    'host',
    'port',
    'username',
    'password',
];

foreach ($requiredConfigKeys as $requiredConfigKey) {
    if (empty($smtp[$requiredConfigKey])) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'SMTP configuration is incomplete.',
        ]);
        exit;
    }
}

$fromEmail = (string) ($messageConfig['from_email'] ?? $smtp['username']);
$fromName = (string) ($messageConfig['from_name'] ?? 'Site internet');
$toEmail = (string) ($messageConfig['to_email'] ?? $smtp['username']);
$toName = (string) ($messageConfig['to_name'] ?? '');

$secure = strtolower((string) ($smtp['secure'] ?? 'ssl'));
$encryption = false;
$lineBreak = "\r\n";

if ($secure === 'tls' || $secure === 'starttls') {
    $encryption = PHPMailer::ENCRYPTION_STARTTLS;
} elseif ($secure === 'ssl' || $secure === 'smtps') {
    $encryption = PHPMailer::ENCRYPTION_SMTPS;
}

$formattedMessage = preg_replace("/\r\n|\r|\n/", $lineBreak, $message) ?: $message;

$lines = [
    "Nom : {$name}",
];

if ($phone !== '') {
    $lines[] = "Téléphone : {$phone}";
}

$lines[] = '';
$lines[] = 'Message :';
$lines[] = '';
$lines[] = $formattedMessage;

try {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = (string) $smtp['host'];
    $mailer->SMTPAuth = true;
    $mailer->Port = (int) $smtp['port'];
    $mailer->Username = (string) $smtp['username'];
    $mailer->Password = (string) $smtp['password'];
    $mailer->CharSet = 'UTF-8';

    if ($encryption !== false) {
        $mailer->SMTPSecure = $encryption;
    }

    if ($isLocalRequest) {
        $mailer->SMTPDebug = 2;
        $mailer->Debugoutput = 'error_log';
    }

    $mailer->setFrom($fromEmail, $fromName);
    $mailer->addAddress($toEmail, $toName);

    if ($replyTo !== '' && filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
        $mailer->addReplyTo($replyTo, $name !== '' ? $name : $replyTo);
    }

    $mailer->Subject = $subject;
    $mailer->Body = implode($lineBreak, $lines);
    $mailer->AltBody = $mailer->Body;
    $mailer->isHTML(false);

    $mailer->send();

    echo json_encode(['success' => true]);
} catch (Exception $exception) {
    error_log('SMTP send failed: ' . $mailer->ErrorInfo . ' | ' . $exception->getMessage());

    $response = [
        'success' => false,
        'message' => 'Message could not be sent.',
    ];

    if ($isLocalRequest) {
        $response['debug'] = $mailer->ErrorInfo !== ''
            ? $mailer->ErrorInfo
            : $exception->getMessage();
    }

    http_response_code(500);
    echo json_encode($response);
}
