const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSEMAIL, // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("ready to send email");
});

module.exports = transporter