const { handleHttp } = require("../utils/errorHandle");
const { sendEmail } = require("../services/email");

const emailCtrl = async (req, res) => {
  try {
    const body = req.body
    const email = sendEmail(body);
    res.status(200).json(email);
  } catch (error) {
   handleHttp(res, "ERROR_SEND_EMAIL", error) 
  }
};

module.export = {
  emailCtrl,
};
