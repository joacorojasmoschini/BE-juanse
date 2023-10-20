const { handleHttp } = require("../utils/errorHandle");
const { registerUser, loginUser } = require("../services/auth");

const registerCtrl = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    if (newUser.hasOwnProperty("message")){
      res.status(409).json(newUser);
    } else {
      res.status(200).json(newUser);  
    }
  } catch (error) {
    handleHttp(res, "ERROR_REGISTER_USER", error);
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;
    const logUser = await loginUser({ email, password });
    if (logUser.hasOwnProperty("message")) {
      res.status(403).json(logUser);
    } else {
      res.status(200).json(logUser);
    }
  } catch (error) {
    handleHttp(res, "ERROR_LOGIN_USER", error);
  }
};

module.exports = { registerCtrl, loginCtrl };
