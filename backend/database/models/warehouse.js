// models/warehouse.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Warehouse = sequelize.define('Warehouse', {
    warehouse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0, 
        },
    },
}, {
    timestamps: true, 
    tableName: 'warehouse', 
});

module.exports = Warehouse;
