const mongoose = require('mongoose');

const beerEntry = new mongoose.Schema(
  {
    name: {type: String, required: true},
    company: {type: String, required: true},
    description: String,
    img: String,
    rating: Number,
    tags: [String]
  })

const Beer = mongoose.model('test', beerEntry);

module.exports = Beer;
