const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/userRoute");
const verifyRoutes = require("./Routes/verifyRoutes");
const courseRoutes = require('./Routes/courseRoute');
const cors = require('cors'); 

const app = express();
const port = 3000;

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
app.use('/user-course', courseRoutes);

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
