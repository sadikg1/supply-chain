
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const OrderStatusHistory = sequelize.define('Order_Status_History', {
    order_status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    previous_state: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    new_state: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, 
    },
}, {
    timestamps: true, 
    tableName: 'order_status_history', 
});

module.exports = OrderStatusHistory;
