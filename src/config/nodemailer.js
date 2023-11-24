const { createTransport } = require("nodemailer");
require("dotenv").config();

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASS_EMAIL}`,
  },
  tls: {
    rejectUnauthorized: false, // Configurar esto en true despues del desarrollo
  },
});

module.exports = {
  transporter,
};
