const { Router } = require("express");
const {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
} = require("../controllers/demo");
const { checkSession } = require("../middlewares/session");

const router = Router();

router.get("/:website", getAllCtrl);
router.get("/:website/:id", getCtrl);
router.post("/:website", checkSession, createCtrl);
router.put("/:website/:id", checkSession, updateCtrl);
router.delete("/:website/:id", checkSession, deleteCtrl);

module.exports = { router };
