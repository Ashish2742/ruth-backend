const Addmission = require("../models/addmission");
const Career = require("../models/career");
const Enquiry = require("../models/enquiry");

class FormsServices {
  static async saveAddmission(data) {
    await Addmission.create(data);
  }

  static async saveCareer(data) {
    await Career.create(data);
  }

  static async saveEnquiry(data) {
    await Enquiry.create(data);
  }
}

module.exports = FormsServices;