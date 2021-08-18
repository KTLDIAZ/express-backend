const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: { type: String, required: true },
  sph: { type: String, required: true },
  add: { type: String, required: false },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
