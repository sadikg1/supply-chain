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
const bcrypt = require('bcrypt');



exports.register = async (req, res) => {
    try {
        const { email, password, role, name, phone,gender } = req.body;

        if (!email || !password || !role || !name || !phone) {
            return res.status(400).json({ error: "Email, password, role, name, and phone are required." });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format." });
        }


        if (phone.length !== 10) {
            return res.status(400).json({ error: "Phone number must be exactly 10 digits." });
        }


        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists." });
        }
        const existingphone = await User.findOne({ where: { phone } });
        if (existingphone) {
            return res.status(400).json({ error: "User with this phone already exists." });
        }
        const existingname = await User.findOne({ where: { name } });
        if (existingname) {
            return res.status(400).json({ error: "User with this name already exists." });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.create({
            email,
            password: hashedPassword,
            role_Id:role,
            name,
            phone,
            gender, 
        });


        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ error: "Internal server error." });
    }
};