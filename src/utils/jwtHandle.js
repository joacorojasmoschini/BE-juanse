const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION_TIME = '7d';

const generateToken = (id) => {
  return sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });
};

const verifyToken = (token) => {
  return verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyToken };