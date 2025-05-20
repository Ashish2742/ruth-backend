const FormsServices = require('../services/formsServices');
const constants = require('../constants/constants');

class FormsController {
  static async saveForm(req, res) {
    try {
      const formType = req.query.type; // use `req.query.type` instead of full query object

      if (formType === constants.formType.ADDMISSION) {
        const { email, phone, name, position, education } = req.body;
        if (!email || !phone || !name || !position || !education) {
          return res.status(400).json({ status: false, message: "All fields are required" });
        }
        await FormsServices.saveAddmission(req.body);
        return res.status(201).json({ status: true, message: "Admission form saved successfully" });

      } else if (formType === constants.formType.CAREER) {
        const { email, phone, name, position, education, experience } = req.body;
        if (!email || !phone || !name || !position || !education || !experience) {
          return res.status(400).json({ status: false, message: "All fields are required" });
        }
        await FormsServices.saveCareer(req.body);
        return res.status(201).json({ status: true, message: "Career form saved successfully" });

      } else {
        const { name, subject, email, message } = req.body;
        if (!email || !name || !subject || !message) {
          return res.status(400).json({ status: false, message: "All fields are required" });
        }
        await FormsServices.saveEnquiry(req.body);
        return res.status(201).json({ status: true, message: "Enquiry form saved successfully" });
      }

    } catch (err) {
      console.error(err);
      return res.status(500).json({ status: false, message: "Internal server error" });
    }
  }
}

module.exports = FormsController;