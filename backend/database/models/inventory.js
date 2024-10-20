
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Inventory = sequelize.define('Inventory', {
    inventory_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expiry_date: {
        type: DataTypes.DATE, 
        allowNull: true,
    },
    warehouse_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true, // Enable timestamps (createdAt, updatedAt)
    tableName: 'inventory', 
});

module.exports = Inventory;
