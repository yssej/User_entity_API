const Entity = require('../models/entity.model');

const createEntity = async (entityData) => {
    return await Entity.create(entityData);
};

const getAllEntitys = async (page = 1, limit = 5) => {
    const offset = (page - 1) * limit;
    const { count, rows } = await Entity.findAndCountAll({ offset, limit });
    return {
        data: rows,
        total: count,
        page,
        totalPages: Math.ceil(count / limit)
    };
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