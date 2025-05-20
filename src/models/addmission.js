const mongoose = require("mongoose");

const AddmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: String,
  education: String,
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Addmission", AddmissionSchema);