const { Router } = require("express");
const {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
} = require("../controllers/catalogo");
const { checkSession } = require("../middlewares/session");
const { upload } = require("../middlewares/multer");

const router = Router();

router.get("/:website", getAllCtrl);
router.get("/:website/:id", getCtrl);
router.post("/:website", checkSession, upload.single("image"), createCtrl);
router.put("/:website/:id", checkSession,  upload.single("image"), updateCtrl);
router.delete("/:website/:id", checkSession, deleteCtrl);

module.exports = { router };
