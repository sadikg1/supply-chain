
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_date: {
        type: DataTypes.DATE, 
        allowNull: false,
    },
    completion_date: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
    ordered_by: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    inventory_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    status_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    payment: {
        type: DataTypes.ENUM('Pending', 'Completed'), 
        allowNull: false,
    },
}, {
    timestamps: true, 

});

module.exports = Order;
