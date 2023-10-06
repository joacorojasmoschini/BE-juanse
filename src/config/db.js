const { connect } = require('mongoose');
require('dotenv').config();

const db = async () => {
  const DB_URL = process.env.DB_URL;
  await connect(DB_URL);
};

module.exports = db;