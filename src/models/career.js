const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  education: String,
  experience: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Career", CareerSchema);