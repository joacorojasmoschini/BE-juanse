const { transporter } = require("../config/nodemailer");
require("dotenv").config();

const sendEmail = async (body) => {
  const mailOptions = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.EMAIL_INFO}`,
    subject: "Nuevo contacto desde el formulario",
    text: `Nombre: ${body.name}\nEmail: ${body.contact}\nInformación: ${body.text}`,
  };
  await transporter.sendMail(mailOptions);
  return
};

module.exports = {
  sendEmail,
};
