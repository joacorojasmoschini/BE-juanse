const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const { router } = require("./routes");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);
db().then(() => console.log("db connected"));

module.exports = app