const mongoose = require("mongoose");
const { Schema } = mongoose;

const BaseSchema = new Schema({
  base: { type: Number, required: true },
  side: { type: String, required: false },
  add: { type: String, required: false },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Base", BaseSchema);
