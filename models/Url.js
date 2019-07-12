const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema(
  {
    url: String,
    short_url: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", UrlSchema);
