const Addmission = require("../models/addmission");
const Career = require("../models/career");
const Enquiry = require("../models/enquiry");
const { sendEmail } = require('../services/mailServices');

const wrapInCard = (title, fields) => {
  const fieldRows = Object.entries(fields).map(([label, value]) => `
    <div style="margin-bottom:10px;">
      <strong>${label}:</strong> <span>${value}</span>
    </div>
  `).join('');

  return `
    <div style="background:#f4f4f4;padding:40px 0;">
      <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;padding:30px;font-family:Arial,sans-serif;box-shadow:0 2px 6px rgba(0,0,0,0.1);">
        <h1 style="font-size:20px;margin-bottom:10px;color:#333333;">📥 ${title}</h1>
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0;">
        ${fieldRows}
        <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0;">
        <footer style="font-size:12px;color:#777;text-align:center;">
        </footer>
      </div>
    </div>
  `;
};

class FormsServices {
  static async saveAddmission(data) {
    await Addmission.create(data);
    const { name, email, phone, position, education } = data;

    await sendEmail({
      to: 'info@ruthinternational.com',
      subject: `New Admission Form Submission from ${name}`,
      text: `New admission form submitted:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nEducation: ${education}`,
      html: wrapInCard('New Admission Form Submission', {
        Name: name,
        Email: email,
        Phone: phone,
        Position: position,
        Education: education
      })
    });
  }

  static async saveCareer(data) {
    await Career.create(data);
    const { name, email, phone, position, education, experience } = data;

    await sendEmail({
      to: 'info@ruthinternational.com',
      subject: `New Career Application from ${name}`,
      text: `New career application:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nEducation: ${education}\nExperience: ${experience}`,
      html: wrapInCard('New Career Application', {
        Name: name,
        Email: email,
        Phone: phone,
        Position: position,
        Education: education,
        Experience: experience
      })
    });
  }

  static async saveEnquiry(data) {
    await Enquiry.create(data);
    const { name, email, subject, message } = data;

    await sendEmail({
      to: 'info@ruthinternational.com',
      subject: `New Enquiry: ${subject}`,
      text: `New enquiry received:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: wrapInCard('New Enquiry', {
        Name: name,
        Email: email,
        Subject: subject,
        Message: message
      })
    });
  }
}

module.exports = FormsServices;