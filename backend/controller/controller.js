const User = require('../database/models/user.js');
const Roles = require('../database/models/roles.js');
const Orders = require('../database/models/order.js');
const Status = require('../database/models/status.js');
const Order_Status_History = require('../database/models/order_status_history.js');
const Inventory = require('../database/models/inventory.js');
const Product = require('../database/models/product.js');
const Warehouse = require('../database/models/warehouse.js');
const Vehicle = require('../database/models/vehicle.js');
const Vehicle_Type = require('../database/models/vehicle_type.js');



exports.hello = async (req, res) => {
    try {
        const users = await User.findAll(); 
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
