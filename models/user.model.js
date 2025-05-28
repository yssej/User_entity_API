const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(50)
    },
    language: {
        type: DataTypes.STRING(2)
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    lastLogin: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        },
        beforeUpdate: async (user) => {
            if (user.changed('password')) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
});

// sequelize.sync()
//     .then(() => console.log('Modèle synchronisé avec la base de données'))
//     .catch(err => console.error('Erreur de synchronisation :', err));

module.exports = User;