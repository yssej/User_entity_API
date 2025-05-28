const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('User_entity_API', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Connecté à MySQL avec Sequelize'))
    .catch(err => console.error('Erreur de connexion Sequelize :', err));

module.exports = sequelize;