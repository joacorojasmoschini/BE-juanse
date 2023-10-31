const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { router } = require("./routes");
const db = require("./config/db");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));
app.use(router);
app.use(cookieParser());
db().then(() => console.log("db connected"));

module.exports = app;
