const mongoose = require("mongoose");

const catalogoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artists: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  spotify: {
    type: String,
    required: true,
  },
  youtube: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
    unique: true,
  },
});

const CatalogoSurtonica = mongoose.model("Catalogo Surtonica", catalogoSchema, "catalogo-surtonica");
const CatalogoJuanse = mongoose.model("Catalogo Juanse", catalogoSchema, "catalogo-juanse");

module.exports = {
  CatalogoJuanse,
  CatalogoSurtonica
}
