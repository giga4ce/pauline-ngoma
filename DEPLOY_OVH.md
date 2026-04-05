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

## 5. SSL et HTTPS

Si le certificat n'est pas encore actif :

1. `Web Cloud` -> `Hebergements`
2. selectionner l'hebergement
3. onglet `Certificats SSL`
4. activer le certificat gratuit Let's Encrypt pour le domaine et le `www`

Ensuite, verifier :

- `https://pauline-ngoma-mabala.fr`
- `https://www.pauline-ngoma-mabala.fr`

## 6. Verifications apres mise en ligne

Verifier au minimum :

- la page d'accueil
- `/expertise`
- `/cabinet`
- `/honoraires`
- `/contact`
- un rechargement direct sur une URL interne, par exemple `https://www.pauline-ngoma-mabala.fr/contact`

Si une URL interne affiche une erreur 404, le fichier `.htaccess` n'a probablement pas ete envoye dans `www/`.

## 7. Point d'attention sur le formulaire de contact

Le formulaire n'envoie pas aujourd'hui vers OVH Mail. Il utilise `formsubmit.co`.

Configuration actuelle :

- fichier : `src/config/contact.js`
- valeur par defaut : `https://formsubmit.co/ajax/<email>`
- email cible dans le code : `harouguindja@gmail.com`

Si tu veux que les messages arrivent sur ta boite OVH, il faudra remplacer cette adresse par ta nouvelle adresse e-mail ou definir `REACT_APP_CONTACT_FORM_ENDPOINT` avant le build.

## Sources OVH consultees

- Publication d'un site sur hebergement web : https://help.ovhcloud.com/csm/en-ie-web-hosting-publishing-website?id=kb_article_view&sysparm_article=KB0052778
- Connexion a l'espace FTP : https://help.ovhcloud.com/csm/en-web-hosting-ftp-storage-connection?id=kb_article_view&sysparm_article=KB0052711
- Diagnostic d'un site non installe / verification multisite et IP : https://help.ovhcloud.com/csm/fr-web-hosting-website-not-installed-diagnosis?id=kb_article_view&sysparm_article=KB0052964
- Edition de la zone DNS OVHcloud : https://help.ovhcloud.com/csm/fr-dns-edit-dns-zone?id=kb_article_view&sysparm_article=KB0051684
