const User = require('./user.model');
const Entity = require('./entity.model');
const sequelize = require('../config/database');

User.belongsToMany(Entity, { through: { model: 'UserEntities', unique: false, timestamps: false }, foreignKey: 'userId' });

sequelize.sync()
    .then(() => console.log('Associations synchronisées avec la base de données'))
    .catch(err => console.error('Erreur de synchronisation :', err));

module.exports = { User, Entity };