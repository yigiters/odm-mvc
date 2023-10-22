const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Kullanıcı oluşturma
router.post('/users', userController.createUser);

module.exports = router;
