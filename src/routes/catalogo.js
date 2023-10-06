const { Router } = require("express");
const {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo,
} = require("../controllers/catalogo");

const router = Router();

router.get("/:pagina", getCatalogos)
router.get("/:pagina/:id", getCatalogo);
router.post("/:pagina", createCatalogo);
router.put("/:pagina/:id", updateCatalogo);
router.delete("/:pagina/:id", deleteCatalogo);

module.exports = { router };
