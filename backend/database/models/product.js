
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SKU: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    cost: {
        type: DataTypes.FLOAT, 
        allowNull: false,
        validate: {
            min: 0, 
        },
    },
}, {
    timestamps: true, 
    tableName: 'products', 
});

module.exports = Product;
