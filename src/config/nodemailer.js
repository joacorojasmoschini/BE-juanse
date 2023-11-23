const { createTransport } = require("nodemailer");
require("dotenv").config();

const transporter = createTransport({
  service: "Gmail",
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
