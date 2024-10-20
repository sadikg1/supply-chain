// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true,
            len: [10, 10], // Ensure 10 digits
        },
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: true,
    },
    role_Id: {
        type: DataTypes.ENUM('0', '1', '2'),
        allowNull: false, 
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
}, {
    timestamps: true, 
});

module.exports = User;
