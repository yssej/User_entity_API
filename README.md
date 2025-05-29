# Test Manatalent – Vue.js & Node.js Fullstack Project

## Description

Ce projet est une application fullstack de gestion d’utilisateurs, d’entités et d’associations entre eux.  
- **Frontend** : Vue.js 3 + Vite + Tailwind CSS  
- **Backend** : Node.js + Express + Sequelize (ou autre ORM)  
- **Fonctionnalités** :  
  - CRUD Utilisateurs  
  - CRUD Entités  
  - Association Utilisateur/Entité (UserEntity)  
  - Interface responsive (sidebar ou navbar)  
  - Gestion des erreurs et validations

---

## Prérequis

- Node.js (>= 16)
- npm ou yarn
- Base de données (ex : MySQL, PostgreSQL, SQLite…)

---

## Installation

### 1. Cloner le projet

```bash
git clone [<url-du-repo>](https://github.com/yssej/User_entity_API.git)
```

### 2. Installer les dépendances

#### Backend

```bash
cd Backend
npm install
```

#### Frontend

```bash
cd Frontend
npm install
```

---

## Configuration

### Backend

- Configure la connexion à la base de données dans `Backend/config/database.js` (ou équivalent).

---

## Lancer le projet

### Backend

```bash
cd Backend
npx nodemon index.js
```
Le serveur écoute par défaut sur `http://localhost:3000`.

### Frontend

```bash
cd Frontend
npm run dev
```
L’application sera accessible sur `http://localhost:5173`.

---

## Fonctionnalités principales

- **Utilisateurs** : création, édition, suppression, affichage
- **Entités** : création, édition, suppression, affichage
- **UserEntity** : associer un utilisateur à une entité, filtrage dynamique des entités déjà associées
- **UI responsive** : sidebar ou navbar adaptative, modals pour les formulaires
- **Gestion des erreurs** : validation des champs, messages d’erreur utilisateur

---

## Structure du projet

```
Test_manatalent/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── ...
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── models/
│   │   ├── router.js
│   │   └── App.vue
│   └── ...
│
└── README.md
```
