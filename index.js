const express = require('express');
const Entity = require('./models/entity.model');
const User = require('./models/user.model');
const sequelize = require('./config/database');
require('./models/userEntity.model');

sequelize.sync()
    .then(() => console.log('Modèles synchronisés avec la base de données'))
    .catch(err => console.error('Erreur de synchronisation :', err));

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});

app.get('/seed-user-entities', async (req, res) => {
    try {
        const user = await User.create({
            name: 'Lefevre',
            firstName: 'Julie',
            language: 'fr',
            email: 'julie.lefevre@mail.com',
            password: 'password3'
        });

        const entity1 = await Entity.create({
            name: 'Entreprise Alpha',
            description: 'Première entreprise',
            siret: '11111111111111',
            keyLicence: 'LIC-ALPHA',
            website: 'https://alpha.com'
        });

        const entity2 = await Entity.create({
            name: 'Entreprise Beta',
            description: 'Deuxième entreprise',
            siret: '22222222222222',
            keyLicence: 'LIC-BETA',
            website: 'https://beta.com'
        });

        await user.addEntities([entity1, entity2]);

        res.json({ user, entities: [entity1, entity2] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur lors de la création' });
    }
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});