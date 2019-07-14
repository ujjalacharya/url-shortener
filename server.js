const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const router = require("./router");
const path = require("path");
const dbConnection = require("./config/db");
const cors = require("cors");
require("dotenv").config();
require("express-async-errors");

dbConnection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Error handling middleware
app.use(function(err, req, res, next) {
  console.log(err);
  return res.status(500).json({
    error: "Something went wrong!"
  });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
