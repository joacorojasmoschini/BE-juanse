const { Router } = require("express");
const {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
} = require("../controllers/demo");

const router = Router();

router.get("/:website", getAllCtrl)
router.get("/:website/:id", getCtrl);
router.post("/:website", createCtrl);
router.put("/:website/:id", updateCtrl);
router.delete("/:website/:id", deleteCtrl);

module.exports = { router };
