const UserModel = require("../models/user");
const { generateToken } = require("../utils/jwtHandle");
const { encrypt, validate } = require("../utils/passwordHandle");

const registerUser = async ({ email, password }) => {
  const checkUser = await UserModel.find();
  console.log(checkUser);
  if (checkUser.length) return { message: "Ya existe una cuenta registrada." };
  const encryptPassword = await encrypt(password);
  const newUser = await UserModel.create({
    email,
    password: encryptPassword,
  });
  return newUser;
};

const loginUser = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });

  const verify = await validate(password, user.password);
  if (!verify) return { message: "Incorrect fields" };

  const token = generateToken(user.id);
  return {
    token,
  };
};
module.exports = { registerUser, loginUser };
