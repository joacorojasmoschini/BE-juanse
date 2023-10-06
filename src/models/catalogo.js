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

const CatalogoSurtonica = mongoose.model("Catalogo-Surtonica", catalogoSchema);
const CatalogoJuanse = mongoose.model("Catalogo-Juanse", catalogoSchema);

module.exports = {
  CatalogoJuanse,
  CatalogoSurtonica
}
