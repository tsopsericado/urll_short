const mongoose = require("../db");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  },
});

// module.exports = mongoose.model("ShortUrl", shortUrlSchema);

const ShortUrl = mongoose.models("shortUrl", shortUrlSchema);

module.exports = ShortUrl; 

