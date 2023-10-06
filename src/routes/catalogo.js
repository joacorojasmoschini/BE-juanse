const { Router } = require("express");
const {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
} = require("../controllers/catalogo");

const router = Router();

router.get("/:pagina", getAllCtrl)
router.get("/:pagina/:id", getCtrl);
router.post("/:pagina", createCtrl);
router.put("/:pagina/:id", updateCtrl);
router.delete("/:pagina/:id", deleteCtrl);

module.exports = { router };
