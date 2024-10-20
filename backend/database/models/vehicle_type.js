// models/vehicleType.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const VehicleType = sequelize.define('VehicleType', {
    Vehicle_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true, 
    tableName: 'vehicle_types', 
});

module.exports = VehicleType;
