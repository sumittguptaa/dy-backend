const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();


router.post('/signup', userController.signup);
router.post('/signin', userController.signin); 
router.post('/forgot-password', userController.forgotPassword); 
router.post('/reset-password', userController.resetPassword);

module.exports = router;
