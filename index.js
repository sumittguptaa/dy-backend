const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoute");
const verifyRoutes = require("./Routes/verifyRoutes");
const courseRoutes = require("./Routes/courseRoute");
const paymentRoutes = require("./Routes/paymentRoute");
const cors = require("cors");
const pdf = require("html-pdf");

const pdfTemplate = require("./document/index.js");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
mongoose.connect(
  "mongodb+srv://opranjan91700:2vNaWKZeiCwFK5WK@cluster0.7mjn7a6.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.json());

app.use(cors());

// Use user routes
app.use("/user", userRoutes);
app.use("/verify", verifyRoutes);
app.use("/user-course", courseRoutes);
app.use("/payment", paymentRoutes);

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// 2vNaWKZeiCwFK5WK
// opranjan91700
// Connect to your MongoDB database
// mongoose.connect('mongodb+srv://opranjan91700:2vNaWKZeiCwFK5WK@cluster0.7mjn7a6.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
