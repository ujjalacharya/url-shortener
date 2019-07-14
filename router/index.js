const Router = require("express").Router();
const Url = require("../models/Url");
const validUrl = require("valid-url");
const ids = require("shortid");

Router.post("/api/url", async (req, res) => {
  const { url } = req.body;

  if (validUrl.isUri(url)) {
    // Check if already exists

    const foundUrl = await Url.findOne({ url });

    if (foundUrl) {
      return res.status(200).json({ success: true, foundUrl });
    }

    const short_url = ids.generate();
    const savedurl = await new Url({
      url,
      short_url
    });

    await savedurl.save();
    res.status(200).json({ success: true, savedurl });
  } else {
    res.status(400).json({ success: false, message: "Bad request" });
  }
});

Router.get("/:url", async (req, res)=> {
 const foundUrl = await Url.findOne({short_url: req.params.url});
 if(foundUrl){
  return res.status(200).json({success: true, message: foundUrl.url});
 }else{
  res.status(400).json({ success: false, message: "Bad request" });
 }
})


module.exports = Router;
