// models/status.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Status = sequelize.define('Status', {
    status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
}, {
    timestamps: true, 
    tableName: 'status', 
});

module.exports = Status;
