const mongoose = require("mongoose");

module.exports = dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
      console.log("Connected...");
    })
    .catch(err => {
      console.error("Error has been occured: ", err);
    });
};
