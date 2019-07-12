const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const router = require("./router");
const dbConnection = require("./config/db");
require("dotenv").config();

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", router);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
