const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require('fs');
const https = require('https');
const { router } = require("./routes");
const db = require("./config/db");
const cookieParser = require("cookie-parser");

// Crear la aplicación Express
const app = express();

// Middleware y rutas
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);
app.use(cookieParser());

// Conectar a la base de datos
db().then(() => console.log("db connected"));

// Opciones para HTTPS
const options = {
  key: fs.readFileSync('/etc/ssl/mysite.key'),
  cert: fs.readFileSync('/etc/ssl/mysite.crt')
};

https.createServer(options, app).listen(443, () => {
  console.log('Server running on port 443');
});

module.exports = app;
