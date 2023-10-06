const mongoose = require("mongoose");

const catalogoSchema = new mongoose.Schema({
  title: String,
  artists: [String],
  image: String,
  date: Date,
  spotify: String,
  youtube: String,
  order: Number,
});

module.exports = mongoose.model("Catalogo", catalogoSchema);
