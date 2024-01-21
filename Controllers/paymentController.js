const nodeCCAvenue = require("node-ccavenue");
const ccav = new nodeCCAvenue.Configure({
  merchant_id: "3072050",
  working_key: "2D1EC34FE5FD8C0FDEE2DDE4822452B0",
});

const paymentController = {
  makePayment: async (req, res) => {
    try {
      const orderParams = {
        order_id: 8765432, // Replace with your actual order ID
        currency: "INR",
        amount: "100",
        redirect_url: encodeURIComponent(`https://dypusm.org`), // Adjust the URL accordingly
        billing_name: "Name of the customer",
        // ... other parameters
      };

      const encryptedOrderData = ccav.getEncryptedOrder(orderParams);
      res.json({ encryptedOrderData });
    } catch (error) {
      console.error("Error initiating payment:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  paymentCallback: async (req, res) => {
    try {
      const { encResp } = req.body;
      const decryptedJsonResponse = ccav.redirectResponseToJson(encResp);
      console.log(decryptedJsonResponse.order_status);
      res.send("Payment callback processed successfully.");
    } catch (error) {
      console.error("Error processing payment callback:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = paymentController;
