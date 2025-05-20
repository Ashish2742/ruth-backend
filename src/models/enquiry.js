const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: String,
  message: String,
  email: { type: String, required: true },
});

module.exports = mongoose.model("Enquiry", EnquirySchema);