// index.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db"); // updated path

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});

// connect to MongoDB
connectDB();

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is listening at the port ${PORT}`);
});
