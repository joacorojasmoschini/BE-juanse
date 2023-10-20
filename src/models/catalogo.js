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
    default: 1,
  },
});

catalogoSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const highestOrderCatalog = await this.constructor.findOne({}, "order")
        .sort({ order: -1 })
        .exec();

      if (highestOrderCatalog) {
        const newOrder = highestOrderCatalog.order + 1;
        await this.constructor.updateMany(
          { order: { $gte: 1 } }, 
          { $inc: { order: 1 } } 
        ).exec();

        this.order = 1;
      } else {
        this.order = 1; 
      }
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const CatalogoSurtonica = mongoose.model("Catalogo Surtonica", catalogoSchema, "catalogo-surtonica");
const CatalogoJuanse = mongoose.model("Catalogo Juanse", catalogoSchema, "catalogo-juanse");

module.exports = {
  CatalogoJuanse,
  CatalogoSurtonica
}
