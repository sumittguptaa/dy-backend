const express = require('express');
const userController = require('../Controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


router.post('/signup', userController.signup);
router.post('/signin', userController.signin); 
router.post('/forgot-password', userController.forgotPassword); 
router.post('/reset-password', userController.resetPassword);


//all users (only accessible to admin)
router.delete('/deleteuser/:userId',userController.deleteUser);
// router.put('/updateuser', authMiddleware, userController.editUser);
router.put('/updateuser/:userId', userController.updateUser);
router.get('/allusers', authMiddleware, userController.getAllUsers);


module.exports = router;
