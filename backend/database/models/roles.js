
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const roles = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
}, {
    timestamps: true, // Enable timestamps if you want createdAt and updatedAt fields
});

module.exports = roles;
