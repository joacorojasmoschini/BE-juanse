const { Router } = require("express");
const { emailCtrl } = require("../controllers/email");

const router = Router();

router.post("/", emailCtrl);
