const Entity = require('../models/entity.model');

const createEntity = async (entityData) => {
    return await Entity.create(entityData);
};

const getAllEntitys = async () => {
    return await Entity.findAll();
};

const getEntityById = async (id) => {
    return await Entity.findByPk(id);
};

const updateEntity = async (id, updateData) => {
    const entity = await Entity.findByPk(id);
    if (!entity) return null;
    await entity.update(updateData);
    return entity;
};

const deleteEntity = async (id) => {
    const entity = await Entity.findByPk(id);
    if (!entity) return null;
    await entity.destroy();
    return entity;
};

module.exports = {
    createEntity,
    getAllEntitys,
    getEntityById,
    updateEntity,
    deleteEntity
};