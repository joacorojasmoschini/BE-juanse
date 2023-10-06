const { hash, compare } = require('bcryptjs');

const encrypt = async (password) => {
  return await hash(password, 8);
};

const validate = async (password, encryptedPassword) => {
  return await compare(password, encryptedPassword);
};

module.exports = { encrypt, validate };