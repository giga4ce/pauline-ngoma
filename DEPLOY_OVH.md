# Deploiement OVH

Ce projet est une application React statique construite avec `craco build`.
Le deploiement sur un hebergement web OVH "Perso" consiste a envoyer le contenu du dossier `build/` dans le dossier `www/` de l'hebergement.

## Etat verifie le 5 avril 2026

- `npm run build` fonctionne localement
- `pauline-ngoma-mabala.fr` pointe vers `5.135.23.164`
- `www.pauline-ngoma-mabala.fr` pointe vers `5.135.23.164`
- le domaine affiche actuellement la page OVH `Site en construction`

## 1. Generer les fichiers a publier

Depuis la racine du projet :

```bash
npm ci
npm run build
```

Les fichiers a envoyer sont ensuite dans `build/`.

Important : il faut envoyer **le contenu** de `build/` dans `www/`, pas le dossier `build/` lui-meme.

## 2. Verifier le rattachement du domaine dans OVH

Dans l'espace client OVH :

1. `Web Cloud` -> `Hebergements`
2. selectionner l'hebergement
3. onglet `Multisite`
4. verifier que `pauline-ngoma-mabala.fr` et `www.pauline-ngoma-mabala.fr` sont declares
5. verifier que le dossier racine est bien `www`

Si le domaine ou le sous-domaine n'apparait pas, il faut l'ajouter ici avant de publier le site.

## 3. Recuperer les acces FTP

Dans l'espace client OVH :

1. `Web Cloud` -> `Hebergements`
2. selectionner l'hebergement
3. onglet `FTP - SSH`
4. recuperer :
   - le serveur FTP
   - l'utilisateur FTP
   - le port
5. si besoin, redefinir le mot de passe FTP

Sur une offre `Perso`, le deploiement standard se fait en FTP avec un client comme FileZilla ou Cyberduck.

## 4. Publier le site

Avec ton client FTP :

1. se connecter au stockage OVH
2. ouvrir le dossier `www/`
3. sauvegarder ou supprimer la page OVH par defaut si elle est encore presente
4. envoyer tout le contenu du dossier local `build/` dans `www/`

Le fichier `.htaccess` est genere avec le build car il est place dans `public/`.
Il est necessaire pour que les routes React comme `/contact`, `/cabinet` ou `/honoraires` fonctionnent correctement sur OVH.

## 5. Configurer Google Places API

Prerequis Google Cloud :

1. activer `Places API (New)`
2. creer une cle API reservee au serveur
3. restreindre cette cle a `Places API (New)`
4. si une restriction par adresse IP est utilisee, autoriser uniquement l'adresse IP sortante de l'hebergement OVH

Dans `www/api/`, copier `config.example.php` vers `config.php`, puis renseigner la section :

```php
'google_places' => [
    'api_key' => 'CHANGE_ME',
    'place_id' => 'ChIJPVYDeN-NyRIRZYHZKHFWd08',
    'timeout_seconds' => 3,
],
```

Remplacer `CHANGE_ME` directement sur le serveur. Ne jamais commiter ni integrer cette cle dans une variable `REACT_APP_*` : ces variables sont publiques dans le bundle frontend.

Le fichier `public/api/config.php` est ignore par Git et bloque par `public/api/.htaccess`. L'endpoint `/api/google-place.php` appelle Google directement, sans cache persistant. En cas d'indisponibilite, la homepage masque les donnees Google dynamiques.

Verifier apres deploiement :

```bash
curl --fail-with-body --silent --show-error \
  https://www.pauline-ngoma-mabala.fr/api/google-place.php
```

La reponse ne doit contenir que `rating`, `userRatingCount`, `placeUrl`, `reviewsUrl` et `writeReviewUrl`. Elle ne doit jamais contenir la cle API.

## 6. SSL et HTTPS

Si le certificat n'est pas encore actif :

1. `Web Cloud` -> `Hebergements`
2. selectionner l'hebergement
3. onglet `Certificats SSL`
4. activer le certificat gratuit Let's Encrypt pour le domaine et le `www`

Ensuite, verifier :

- `https://pauline-ngoma-mabala.fr`
- `https://www.pauline-ngoma-mabala.fr`

## 7. Verifications apres mise en ligne

Verifier au minimum :

- la page d'accueil
- `/expertise`
- `/cabinet`
- `/honoraires`
- `/contact`
- un rechargement direct sur une URL interne, par exemple `https://www.pauline-ngoma-mabala.fr/contact`

Si une URL interne affiche une erreur 404, le fichier `.htaccess` n'a probablement pas ete envoye dans `www/`.

## 8. Formulaire de contact

Les deux formulaires (accueil et page Contact) envoient les demandes a l'endpoint PHP `/api/contact.php`, qui les transmet par e-mail via le SMTP OVH de la boite `contact@pauline-ngoma-mabala.fr` (PHPMailer). Aucun service tiers n'intervient et aucune demande n'est stockee en base de donnees.

Fonctionnement :

- endpoint configure dans `src/config/contact.js` : `/api/contact.php` par defaut, modifiable avec `REACT_APP_CONTACT_FORM_ENDPOINT` avant le build
- champs obligatoires : nom, e-mail, telephone et message
- le telephone est valide cote navigateur et cote serveur (8 a 15 chiffres ; espaces, points, tirets, parentheses et `+` initial acceptes)
- si un champ manque ou est invalide, le serveur repond `422` avec un message par champ, affiche sous le champ concerne

Avant le build, installer PHPMailer (voir `SMTP_OVH.md`) :

```bash
cd public/api
composer install --no-dev
cd ../..
```

Le build doit contenir `build/api/contact.php`, `build/api/vendor/` et `build/api/.htaccess`.

Sur le serveur, `www/api/config.php` doit exister et contenir :

- la section `smtp` : `ssl0.ovh.net`, port `465`, `ssl`, identifiant `contact@pauline-ngoma-mabala.fr` et mot de passe de la boite OVH
- la section `message` : expediteur et destinataire des demandes
- la section `google_places` (voir section 5)

Ce fichier est ignore par Git et bloque en acces web par `public/api/.htaccess`. Ne jamais commiter le mot de passe SMTP.

Verifier apres deploiement, sans envoyer d'e-mail (requete volontairement incomplete) :

```bash
curl --silent --show-error \
  --data "nom=Test&email=test@exemple.fr&message=Verification" \
  https://www.pauline-ngoma-mabala.fr/api/contact.php
```

La reponse attendue est une erreur `422` contenant `errors.telephone` : elle confirme que `vendor/` et `config.php` sont en place et que la validation serveur fonctionne. Une reponse `500` indique que `vendor/` ou `config.php` manque.

Ce test ne verifie pas les identifiants SMTP. Envoyer ensuite un vrai message depuis chaque formulaire (accueil et page Contact) et verifier sa reception sur `contact@pauline-ngoma-mabala.fr`.

## Sources OVH consultees

- Publication d'un site sur hebergement web : https://help.ovhcloud.com/csm/en-ie-web-hosting-publishing-website?id=kb_article_view&sysparm_article=KB0052778
- Connexion a l'espace FTP : https://help.ovhcloud.com/csm/en-web-hosting-ftp-storage-connection?id=kb_article_view&sysparm_article=KB0052711
- Diagnostic d'un site non installe / verification multisite et IP : https://help.ovhcloud.com/csm/fr-web-hosting-website-not-installed-diagnosis?id=kb_article_view&sysparm_article=KB0052964
- Edition de la zone DNS OVHcloud : https://help.ovhcloud.com/csm/fr-dns-edit-dns-zone?id=kb_article_view&sysparm_article=KB0051684
