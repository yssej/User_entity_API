const entityService = require('../services/entity.service');

// Create a new entity
const createEntity = async (req, res) => {
    try {
        console.log('Creating entity with data:', req.body);
        const entity = await entityService.createEntity(req.body);
        res.status(201).json(entity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all entities
const getAllEntities = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const entities = await entityService.getAllEntitys(page, limit);
        res.json(entities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get entity by ID
const getEntityById = async (req, res) => {
    try {
        const entity = await entityService.getEntityById(req.params.id);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });
        res.json(entity);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update entity
const updateEntity = async (req, res) => {
    try {
        const entity = await entityService.updateEntity(req.params.id, req.body);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });
        res.json(entity);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete entity
const deleteEntity = async (req, res) => {
    try {
        const entity = await entityService.deleteEntity(req.params.id);
        if (!entity) return res.status(404).json({ error: 'Entity not found' });
        res.json({ message: 'Entity deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createEntity,
    getAllEntities,
    getEntityById,
    updateEntity,
    deleteEntity
};