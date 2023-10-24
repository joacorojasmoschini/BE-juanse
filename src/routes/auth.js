const { Router } = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");

const router = Router();

router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

module.exports = { router };
