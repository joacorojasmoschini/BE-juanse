const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
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
  prod: {
    type: String,
    required: true,
  },
  original: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ["master", "mix"],
    required: true
  }
});

const DemoSurtonica = mongoose.model("Demo Surtonica", demoSchema, "demo-surtonica");
const DemoJuanse = mongoose.model("Demo Juanse", demoSchema, "demo-juanse");

module.exports = {
  DemoJuanse,
  DemoSurtonica
}
