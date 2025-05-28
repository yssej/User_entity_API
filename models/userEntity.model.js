const User = require('./user.model');
const Entity = require('./entity.model');
const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const UserEntity = sequelize.define('UserEntities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    entityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});


User.belongsToMany(Entity, { through: UserEntity, foreignKey: 'userId' });
Entity.belongsToMany(User, { through: UserEntity, foreignKey: 'entityId' });
sequelize.sync()
    .then(() => console.log('Associations synchronisées avec la base de données'))
    .catch(err => console.error('Erreur de synchronisation :', err));

module.exports = { User, Entity, UserEntity };