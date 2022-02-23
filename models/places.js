const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, required: true },
  cuisines: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

module.exports = mongoose.model("Place", placesSchema);
