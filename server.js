const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const ShortUrl = require("./models/shortUrl");
const app = express();

mongoose.connect(
  "mongodb+srv://ricardotsopse:eoueei1ZOLnX6FKK@url-shortener.jys0zri.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))


app.get("/", async(req, res) => {
 const shortUrls = 
 await ShortUrl.find()
   res.render("index", { shortUrls: shortUrls});
});
   
// Creating a short url
app.post("/shortUrl", async (req, res) => {
  await  ShortUrl.create({full: req.body.fullUrl})
  console.log(req.body.full);
  res.redirect('/')
});

// getting the shortened url
app.get('/:shortUrl', async (req, res)=> {
    const shortUrl = 
    await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) 
     return res.sendStatus(404)
      
    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})     


//Listening port
app.listen(process.env.port || 5000);
