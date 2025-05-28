# User Entity API

Cette API permet de gérer des utilisateurs, des entités, et leurs associations via une table pivot (`UserEntities`).  
Elle est basée sur Node.js, Express et Sequelize.

---

## Installation

1. **Cloner le projet**
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer la base de données dans `config/database.js`
4. Lancer le serveur :
   ```bash
   npx nodemon index.js
   ```
   Le serveur démarre sur [http://localhost:3000](http://localhost:3000)

---

## Endpoints

### Utilisateurs (`/users`)
| Méthode | Endpoint           | Description                |
|---------|--------------------|----------------------------|
| POST    | `/users`           | Créer un utilisateur       |
| GET     | `/users`           | Lister tous les utilisateurs |
| GET     | `/users/:id`       | Obtenir un utilisateur     |
| PUT     | `/users/:id`       | Modifier un utilisateur    |
| DELETE  | `/users/:id`       | Supprimer un utilisateur   |

### Entités (`/entities`)
| Méthode | Endpoint             | Description                |
|---------|----------------------|----------------------------|
| POST    | `/entities`          | Créer une entité           |
| GET     | `/entities`          | Lister toutes les entités  |
| GET     | `/entities/:id`      | Obtenir une entité         |
| PUT     | `/entities/:id`      | Modifier une entité        |
| DELETE  | `/entities/:id`      | Supprimer une entité       |

### Table pivot UserEntities (`/user-entities`)
| Méthode | Endpoint                  | Description                                  |
|---------|---------------------------|----------------------------------------------|
| POST    | `/user-entities`          | Associer un user à une entité                |
| GET     | `/user-entities`          | Lister toutes les associations               |
| GET     | `/user-entities/:id`      | Obtenir une association par son id           |
| PUT     | `/user-entities/:id`      | Modifier une association                     |
| DELETE  | `/user-entities/:id`      | Supprimer une association par son id         |

---

## Exemples de requêtes

### Créer un utilisateur
```json
POST /users
{
  "name": "Doe",
  "firstName": "John",
  "email": "john.doe@mail.com",
  "password": "motdepasse"
}
```

### Associer un utilisateur à une entité
```json
POST /user-entities
{
  "userId": 1,
  "entityId": 2
}
```

---

## Remarques

- Le mot de passe utilisateur est automatiquement hashé à la création.
- Les champs obligatoires sont à respecter selon les modèles.
- Utilisez un outil comme Insomnia ou Postman pour tester les endpoints.

---
