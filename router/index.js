const Router = require("express").Router();

Router.get("/url", (req, res) => {
  res.json("Sup");
});

module.exports = Router;
