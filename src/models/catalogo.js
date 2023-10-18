const mongoose = require("mongoose");

const catalogoSchema = new mongoose.Schema({
  title: {
    type: String,

  },
  artists: {
    type: [String],

  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,

  },
  spotify: {
    type: String,

  },
  youtube: {
    type: String,

  },
  order: {
    type: Number,

  },
});

const CatalogoSurtonica = mongoose.model("Catalogo Surtonica", catalogoSchema, "catalogo-surtonica");
const CatalogoJuanse = mongoose.model("Catalogo Juanse", catalogoSchema, "catalogo-juanse");

module.exports = {
  CatalogoJuanse,
  CatalogoSurtonica
}
