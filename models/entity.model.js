const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entity = sequelize.define('Entity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    siret: {
        type: DataTypes.STRING(20)
    },
    keyLicence: {
        type: DataTypes.STRING(250)
    },
    website: {
        type: DataTypes.STRING(100)
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false
});

// sequelize.sync()
//     .then(() => console.log('Modèle synchronisé avec la base de données'))
//     .catch(err => console.error('Erreur de synchronisation :', err));

module.exports = Entity;