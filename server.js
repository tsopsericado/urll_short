const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ShortUrl = require("./models/shortUrl");

mongoose.connect("mongodb://localhost/urlShortener", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
});
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {});

app.listen(process.env.port || 5000);
