# Mise en ligne sur OVH — experts.56north.io

Durée : environ 30 minutes la première fois. Aucune compétence serveur avancée requise : chaque étape est une commande à copier.

## Ce qu'il faut

- Un **VPS OVH** (l'offre d'entrée de gamme suffit : 2 vCPU, 4 Go de RAM). L'hébergement web mutualisé ne convient pas, car le site a besoin d'un serveur Node.js qui tourne en continu pour les formulaires.
- Système : **Ubuntu 24.04** (à choisir lors de la commande).
- L'accès à la zone DNS de 56north.io (espace client OVH, rubrique Domaines).

## 1. Pointer le sous-domaine vers le VPS

Espace client OVH → Domaines → 56north.io → Zone DNS → Ajouter une entrée :

| Type | Sous-domaine | Cible |
| --- | --- | --- |
| A | experts | adresse IPv4 du VPS |

La propagation prend de quelques minutes à une heure.

## 2. Installer Docker sur le VPS

Connexion au VPS (l'adresse et le mot de passe arrivent par email d'OVH) :

```bash
ssh ubuntu@ADRESSE_IP_DU_VPS
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER && exit
```

Se reconnecter ensuite avec la même commande `ssh`.

## 3. Envoyer le code

Depuis l'ordinateur où se trouve le dossier `site` :

```bash
scp -r site ubuntu@ADRESSE_IP_DU_VPS:~/56north-experts
```

## 4. Renseigner les clés Supabase (sur le VPS)

```bash
cd ~/56north-experts
nano .env.production
```

Coller ces deux lignes, puis enregistrer (Ctrl+O, Entrée, Ctrl+X) :

```
SUPABASE_URL=https://yjbtezaoezefcqiryymr.supabase.co
SUPABASE_SECRET_KEY=la_cle_secrete
```

La clé secrète se trouve dans Supabase → projet **56north-experts** → Project Settings → API Keys → Secret keys. Elle donne un accès complet à la base : ne jamais l'envoyer par email, chat ou message.

## 5. Démarrer le site

```bash
docker compose -f deploy/docker-compose.yml up -d --build
```

Le premier démarrage prend 3 à 5 minutes. Caddy obtient automatiquement le certificat HTTPS dès que le DNS pointe vers le VPS. Le site est alors en ligne sur https://experts.56north.io.

## Mettre à jour le site plus tard

Renvoyer le dossier modifié (étape 3), puis :

```bash
cd ~/56north-experts && docker compose -f deploy/docker-compose.yml up -d --build
```

## Vérifier que tout fonctionne

- Ouvrir https://experts.56north.io et remplir le formulaire de contact avec une adresse de test.
- La demande doit apparaître dans Supabase → Table Editor → `leads`.
- Journaux du site en cas de problème : `docker compose -f deploy/docker-compose.yml logs web --tail 50`
