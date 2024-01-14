const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

router.post('/verify', userController.verifyEmail);

module.exports = router;
