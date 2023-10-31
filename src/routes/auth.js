const { Router } = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { checkSession } = require("../middlewares/session");

const router = Router();

router.get("/", checkSession, (req, res) => {
  res.status(200).json({session: true, message: "valid session"})
});
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

module.exports = { router };
