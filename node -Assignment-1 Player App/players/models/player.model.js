const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  title: { type: String, requried: [true, "Field invalid"], unique: true },
  description: { type: String, requried: [true, "Field invalid"] },
  price: { type: Number, requried: [true, "Field invalid"] },
  brand: { type: String, requried: [true, "Field invalid"] },
  category: { type: String, requried: [true, "Field invalid"] },
  thumbnail: { type: String, requried: [true, "Field invalid"] },
});

const player = mongoose.model("player", playerSchema);
module.exports = player;
