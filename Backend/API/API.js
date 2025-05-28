const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const entityController = require('../controllers/entity.controller');
const userEntityController = require('../controllers/userEntity.controller');

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Entity routes
router.post('/entities', entityController.createEntity);
router.get('/entities', entityController.getAllEntities);
router.get('/entities/:id', entityController.getEntityById);
router.put('/entities/:id', entityController.updateEntity);
router.delete('/entities/:id', entityController.deleteEntity);

// UserEntity (pivot) routes
router.post('/user-entities', userEntityController.addUserEntity);
router.get('/user-entities', userEntityController.getAllUserEntities);
router.get('/user-entities/:id', userEntityController.getUserEntityById);
router.delete('/user-entities', userEntityController.removeUserEntity);
router.put('/user-entities/:id', userEntityController.updateUserEntityById);
router.delete('/user-entities/:id', userEntityController.removeUserEntityById);

router.get('/users/:userId/entities', userEntityController.getEntitiesOfUser);

router.get('/entities/:entityId/users', userEntityController.getUsersOfEntity);

module.exports = router;