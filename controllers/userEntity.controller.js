const userEntityService = require('../services/userEntity.service');

const addUserEntity = async (req, res) => {
    try {
        const { userId, entityId } = req.body;
        const result = await userEntityService.addUserEntity(userId, entityId);
        if (!result) return res.status(404).json({ error: 'User or Entity not found' });
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getEntitiesOfUser = async (req, res) => {
    try {
        const entities = await userEntityService.getEntitiesOfUser(req.params.userId);
        if (!entities) return res.status(404).json({ error: 'User not found' });
        res.json(entities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUsersOfEntity = async (req, res) => {
    try {
        const users = await userEntityService.getUsersOfEntity(req.params.entityId);
        if (!users) return res.status(404).json({ error: 'Entity not found' });
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getUserEntityById = async (req, res) => {
    try {
        const userEntity = await userEntityService.getUserEntityById(req.params.id);
        if (!userEntity) return res.status(404).json({ error: 'UserEntity not found' });
        res.json(userEntity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const removeUserEntity = async (req, res) => {
    try {
        const { userId, entityId } = req.body;
        const result = await userEntityService.removeUserEntity(userId, entityId);
        if (!result) return res.status(404).json({ error: 'User or Entity not found' });
        res.json({ message: 'Association deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateUserEntityById = async (req, res) => {
    try {
        const userEntity = await userEntityService.getUserEntityById(req.params.id);
        if (!userEntity) return res.status(404).json({ error: 'UserEntity not found' });

        await userEntity.update(req.body);
        res.json(userEntity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const removeUserEntityById = async (req, res) => {
    try {
        const userEntity = await userEntityService.getUserEntityById(req.params.id);
        if (!userEntity) return res.status(404).json({ error: 'UserEntity not found' });

        await userEntity.destroy();
        res.json({ message: 'Association deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllUserEntities = async (req, res) => {
    try {
        const userEntities = await userEntityService.getAllUserEntities();
        res.json(userEntities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    addUserEntity,
    getEntitiesOfUser,
    getUsersOfEntity,
    getUserEntityById,
    removeUserEntity,
    updateUserEntityById,
    removeUserEntityById,
    getAllUserEntities
};