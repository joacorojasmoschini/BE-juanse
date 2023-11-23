const { transporter } = require("../config/nodemailer");
require("dotenv").config();

const sendEmail = (body) => {
  const mailOptions = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL_INFO}`,
    subject: "Nuevo contacto desde el formulario",
    text: `Nombre: ${body.name}\nEmail: ${body.email}\nTelefono: ${body.phone}\nInformación: ${body.info}`,
  };
};

module.exports = {
  sendEmail,
};
