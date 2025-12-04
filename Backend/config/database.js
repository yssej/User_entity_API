const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME || 'User_entity_API',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || 'example',
    {
        host: process.env.DB_HOST || 'db',   // 👉 IMPORTANT : 'db'
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306
    }
);

sequelize.authenticate()
    .then(() => console.log('Connecté à MySQL avec Sequelize'))
    .catch(err => console.error('Erreur de connexion Sequelize :', err));

module.exports = sequelize;
