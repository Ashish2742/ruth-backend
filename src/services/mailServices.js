// emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load SMTP credentials from .env

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'noreply@ruthinternational.com',
    pass: process.env.SMTP_PASS || 'RuthInternational@8938'
  }
});

async function sendEmail({ to, subject, text, html }) {
  const mailOptions = {
    from: '"No Reply" <noreply@ruthinternational.com>',
    to,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = { sendEmail };