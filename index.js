const express = require('express');
const userEntityService = require('./services/userEntity.service');
const sequelize = require('./config/database');
require('./models/userEntity.model');

sequelize.sync()
    .then(() => console.log('Modèles synchronisés avec la base de données'))
    .catch(err => console.error('Erreur de synchronisation :', err));

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.get('/user-entity/:id', async (req, res) => {
    try {
        const entities = await userEntityService.getUserEntityById(req.params.id);
        if (!entities) return res.status(404).json({ error: 'Utilisateur non trouvé' });
        res.json(entities);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de la récupération des entités' });
    }
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});