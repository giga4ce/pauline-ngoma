# SMTP OVH

Cette mise en place utilise :

- un endpoint PHP dans `public/api/contact.php`
- `PHPMailer`
- le SMTP OVH de la boite `contact@pauline-ngoma-mabala.fr`

## 1. Installer PHPMailer localement

Depuis la racine du projet :

```bash
cd public/api
composer install --no-dev
cd ../..
```

Le dossier `public/api/vendor/` doit ensuite exister avant le build.

## 2. Creer la configuration SMTP

Copier :

```bash
cp public/api/config.example.php public/api/config.php
```

Puis renseigner dans `public/api/config.php` :

- `host` : `ssl0.ovh.net`
- `port` : `465`
- `secure` : `ssl`
- `username` : `contact@pauline-ngoma-mabala.fr`
- `password` : mot de passe de la boite OVH

Le fichier `public/api/config.php` est ignore par Git.

## 3. Build

```bash
npm run build
```

Le build doit contenir :

- `build/api/contact.php`
- `build/api/vendor/`
- `build/api/.htaccess`

## 4. Mise en ligne sur OVH

Avant l'upload, creer aussi le fichier serveur :

```bash
cp public/api/config.example.php build/api/config.php
```

Puis remplacer dans `build/api/config.php` le mot de passe `CHANGE_ME`.

Ensuite envoyer le contenu de `build/` dans `www/`.

## 5. Test

Verifier apres mise en ligne :

- la soumission du formulaire depuis l'accueil
- la soumission depuis la page contact
- la reception sur `contact@pauline-ngoma-mabala.fr`

## Notes

- Le mot de passe SMTP ne doit pas etre committe dans Git.
- Le front React appelle maintenant `/api/contact.php`.
- Si `build/api/config.php` est absent, le formulaire renverra une erreur serveur.
