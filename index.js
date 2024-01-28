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
const mbatemplate = require("./document/MBA.js");
const bba_2nd_template = require("./document/BBA2ndyear.js");
const bba_3rd_template = require("./document/BBA3rdyear.js");
const templates = {
  mba: mbatemplate,
  bba_2nd: bba_2nd_template,
  bba_3rd: bba_3rd_template,
};

const app = express();
const port = 3000;
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
mongoose.connect(
  "mongodb+srv://opranjan91700:2vNaWKZeiCwFK5WK@cluster0.7mjn7a6.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.json());

// Use user routes
app.use("/user", userRoutes);
app.use("/verify", verifyRoutes);
app.use("/user-course", courseRoutes);
app.use("/payment", paymentRoutes);

app.options("/create-pdf", cors());
app.post("/create-pdf", cors(), (req, res) => {
  const course = req.body.course;
  const template = templates[course];

  if (template) {
    pdf.create(template(req.body), {}).toFile("result.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
      } else {
        res.send(Promise.resolve());
      }
    });
  } else {
    res.status(400).send("Invalid course");
  }
});

app.options("/fetch-pdf", cors());
app.get("/fetch-pdf", cors(), (req, res) => {
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
