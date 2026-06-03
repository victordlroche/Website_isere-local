# Pisé Isérois — Site vitrine

Plateforme de valorisation du savoir-faire en construction de terre crue en Isère.  
Stack : **Astro 4** · **Decap CMS** · **GitHub Pages** · **GitHub Actions**  
Coût d'hébergement : **zéro**.

---

## 🚀 Mise en ligne — 4 étapes

### Étape 1 — Préparer le repo GitHub

1. Va sur [github.com](https://github.com) → **New repository**
2. Nom : `pise-iserois` (ou ce que tu veux)
3. Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
4. Ne pas initialiser avec README

Puis dans ce dossier sur ta machine :

```bash
git init
git add .
git commit -m "init: structure Astro + Decap CMS"
git remote add origin https://github.com/TON_USERNAME/pise-iserois.git
git push -u origin main
```

---

### Étape 2 — Activer GitHub Pages

1. Dans ton repo → **Settings** → **Pages**
2. Source : **GitHub Actions**
3. C'est tout — le premier déploiement se lance automatiquement

Ton site sera accessible sur :  
`https://TON_USERNAME.github.io/pise-iserois`

---

### Étape 3 — Configurer l'interface d'administration (Decap CMS)

L'admin est accessible sur `/pise-iserois/admin`.  
Pour permettre la connexion via GitHub, il faut créer une **OAuth App**.

**Créer l'OAuth App (une seule fois, 3 minutes) :**

1. GitHub → Settings → Developer settings → **OAuth Apps** → New
2. Remplis :
   - Application name : `Pisé Isérois CMS`
   - Homepage URL : `https://TON_USERNAME.github.io/pise-iserois`
   - Authorization callback URL : `https://TON_USERNAME.github.io/pise-iserois`
3. Clique **Register application**
4. Copie le **Client ID**

**Mettre à jour les fichiers de config :**

Dans `astro.config.mjs` :
```js
site: 'https://TON_USERNAME.github.io',
```

Dans `public/admin/config.yml` :
```yaml
backend:
  repo: TON_USERNAME/pise-iserois
  app_id: TON_CLIENT_ID_ICI
```

Puis :
```bash
git add .
git commit -m "config: GitHub Pages URL et OAuth App ID"
git push
```

---

### Étape 4 — Première connexion à l'admin

1. Va sur `https://TON_USERNAME.github.io/pise-iserois/admin`
2. Clique **Login with GitHub**
3. Autorise l'accès
4. Tu es dans l'interface d'administration ✅

---

## ✏️ Utilisation quotidienne (admin non-technique)

L'interface d'administration te permet de :

| Action | Comment |
|--------|---------|
| Ajouter une réalisation | Admin → Réalisations → + Nouvelle |
| Ajouter un artisan | Admin → Acteurs → + Nouveau |
| Ajouter une association | Admin → Associations → + Nouvelle |
| Publier un événement | Admin → Agenda → + Nouvel événement |
| Ajouter une ressource | Admin → Ressources → + Nouvelle |

Après chaque publication, le site se reconstruit automatiquement en **~2 minutes**.

---

## 🛠 Développement local

```bash
npm install
npm run dev
# → http://localhost:4321/pise-iserois
```

---

## 📁 Structure du projet

```
pise-iserois/
├── .github/workflows/deploy.yml   # Déploiement automatique
├── public/
│   ├── admin/
│   │   ├── index.html             # Interface Decap CMS
│   │   └── config.yml             # Collections CMS
│   ├── images/                    # Images uploadées via admin
│   └── favicon.svg
├── src/
│   ├── content/                   # Contenu Markdown (géré par CMS)
│   │   ├── realisations/
│   │   ├── acteurs/
│   │   ├── associations/
│   │   ├── agenda/
│   │   └── ressources/
│   ├── layouts/
│   │   └── BaseLayout.astro       # Layout commun (nav + footer)
│   └── pages/
│       ├── index.astro            # Page d'accueil
│       ├── le-pise.astro
│       ├── realisations/
│       ├── acteurs/
│       ├── associations/
│       ├── agenda/
│       └── ressources/
├── astro.config.mjs
└── package.json
```

---

## 🔄 Ajouter une nouvelle rubrique (développeur)

1. Créer une collection dans `src/content/config.ts`
2. Ajouter la collection dans `public/admin/config.yml`
3. Créer la page `src/pages/ma-rubrique/index.astro`
4. Ajouter le lien dans `src/layouts/BaseLayout.astro`

---

## 📝 Personnalisation à faire au lancement

- [ ] Remplacer `TON_USERNAME` dans `astro.config.mjs`
- [ ] Remplacer `TON_USERNAME` et `TON_CLIENT_ID` dans `public/admin/config.yml`
- [ ] Remplacer les données exemple par le vrai contenu
- [ ] Ajouter les vraies photos dans `public/images/`
- [ ] Mettre à jour les données de contact dans le footer
