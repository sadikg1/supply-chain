const express = require('express');
const router = express.Router();



const controller = require('../controller/controller.js');

// router.get('/', controller.scala);
router.get('/api/users', controller.register);
// router.get('/api', controller.register);

module.exports = router;
