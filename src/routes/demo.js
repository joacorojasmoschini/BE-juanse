const { Router } = require("express");
const {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
} = require("../controllers/demo");
const { checkSession } = require("../middlewares/session");
const { upload } = require("../middlewares/multer");

const router = Router();

router.get("/:website", getAllCtrl);
router.get("/:website/:id", getCtrl);
router.post(
  "/:website",
  checkSession,
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "prod", maxCount: 1 },
    { name: "original", maxCount: 1 },
  ]),
  createCtrl
);
router.put("/:website/:id", checkSession, updateCtrl);
router.delete("/:website/:id", checkSession, deleteCtrl);

module.exports = { router };
