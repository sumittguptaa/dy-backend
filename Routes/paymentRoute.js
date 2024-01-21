const express = require("express");

const paymentController = require("../Controllers/paymentController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/pay", paymentController.makePayment);
router.post("/callback", paymentController.paymentCallback);
module.exports = router;
