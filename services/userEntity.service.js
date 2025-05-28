const { User, Entity, UserEntity } = require('../models/userEntity.model');

const addUserEntity = async (userId, entityId) => {
    const user = await User.findByPk(userId);
    const entity = await Entity.findByPk(entityId);
    if (!user || !entity) return null;
    await user.addEntity(entity);
    return { userId, entityId };
};

const getEntitiesOfUser = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) return null;
    return await user.getEntities();
};

const getUsersOfEntity = async (entityId) => {
    const entity = await Entity.findByPk(entityId);
    if (!entity) return null;
    return await entity.getUsers();
};

const getUserEntityById = async (id) => {
    return await UserEntity.findByPk(id);
};

const removeUserEntity = async (userId, entityId) => {
    const user = await User.findByPk(userId);
    const entity = await Entity.findByPk(entityId);
    if (!user || !entity) return null;
    await user.removeEntity(entity);
    return { userId, entityId };
};

module.exports = {
    addUserEntity,
    getEntitiesOfUser,
    getUsersOfEntity,
    removeUserEntity,
    getUserEntityById
};