const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


const userController = {

  ////////////////////////////////////////////////////// sign up
  signup: async (req, res) => {
    const { name, email, password, confirmPassword, mobile, state, city } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }

       if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const otp = generateOTP();

      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        mobile,
        state,
        city,
        otp
      });

      
      await newUser.save();
      sendVerificationEmail(newUser.email, otp);

      res.json({ message: 'User registered successfully. Please check your email for verification.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  verifyEmail: async (req, res) => {
    const { email, otp } = req.body;

    try {
      const user = await User.findOne({ email, otp });

      if (!user) {
        return res.status(400).json({ message: 'Invalid email or OTP' });
      }
      user.verified = true;
      await user.save();

      res.json({ message: 'Email verification successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },






  ///////////////////////////////////////// signin
  signin: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      if (!user.verified) {
        return res.status(401).json({ message: 'User not verified. Please check your email for verification.' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ userId: user._id }, 'ehuewheuwh', { expiresIn: '1h' });

      res.json({ message: 'Sign-in successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },




  /////////////////////////////////////////////////////////forgot password
  forgotPassword: async (req, res) => {
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Generate a reset token and set its expiry time
      const resetToken = crypto.randomBytes(20).toString('hex');
      const resetTokenExpiry = Date.now() + 3600000; 

     
      user.resetToken = resetToken;
      user.resetTokenExpiry = resetTokenExpiry;
      await user.save();

    
      sendResetPasswordEmail(user.email, resetToken);

      res.json({ message: 'Password reset email sent. Please check your email.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },



  //////////////////////////////////////////////////////////reset password
  resetPassword: async (req, res) => {
    const { email, resetToken, newPassword } = req.body;

    try {
      const user = await User.findOne({ email, resetToken });

      if (!user) {
        return res.status(400).json({ message: 'Invalid email or reset token' });
      }

      if (Date.now() > user.resetTokenExpiry) {
        return res.status(400).json({ message: 'Reset token has expired' });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      user.resetToken = null;
      user.resetTokenExpiry = null;
      await user.save();

      res.json({ message: 'Password reset successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

};





//////////////////////////////////////////// Reset Password
function sendResetPasswordEmail(email, resetToken) {
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:'587',
    secure:false,
    requireTLS:true,
    auth: {
      user: 'opranjan790@gmail.com',
      pass: 'xwxqhoflubiielwn'
    }
  });

  const mailOptions = {
    from: 'opranjan91700@gmail.com',
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: http://localhost:3000/reset-password?token=${resetToken}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending reset password email:', error);
    } else {
      console.log('Email sent:', info);
    }
  });
}



//////////////////////////////////////////////////////////////////Verify Email

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}


function sendVerificationEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:'587',
    secure:false,
    requireTLS:true,
    auth: {
      user: 'opranjan790@gmail.com',
      pass: 'xwxqhoflubiielwn'
    }
  });

  const mailOptions = {
    from: 'opranjan790@gmail.com',
    to: email,
    subject: 'Email Verification',
    text: `Your OTP for email verification is: ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = userController;



// xwxqhoflubiielwn
