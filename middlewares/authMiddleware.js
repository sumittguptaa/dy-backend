const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  console.log('Received Token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized. Token not provided.' });
  }

  try {
    //secre-key
    const decoded = jwt.verify(token, 'ehuewheuwh');
    console.log('Decoded Token:', decoded);
    
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized. Invalid user.' });
    }

    req.user = user; // Attach the user to the request object
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized. Invalid token.' });
  }
};

module.exports = authMiddleware;
