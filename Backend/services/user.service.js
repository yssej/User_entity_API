const User = require('../models/user.model');

const createUser = async (userData) => {
    return await User.create(userData);
};

const getAllUsers = async () => {
    return await User.findAll();
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

const updateUser = async (id, updateData) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.update(updateData);
    return user;
};

const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return user;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};