const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const router = require("./router");
const dbConnection = require("./config/db");
require("dotenv").config();
require("express-async-errors");

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

// Error handling middleware
app.use(function(err, req, res, next) {
 console.log(err);
 return res.status(500).json({
   error: errorHandler(err) || "Something went wrong!"
 });
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
