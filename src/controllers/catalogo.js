const { handleHttp } = require("../utils/errorHandle");
const {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo,
} = require("../services/catalogo");

const getAllCtrl = async (req, res) => {
  try {
    const { website } = req.params;
    const catalogos = await getCatalogos(website);
    res.status(200).json(catalogos);
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATALOGOS", error);
  }
};
const getCtrl = async (req, res) => {
  try {
    const { website, id } = req.params;
    const catalogo = await getCatalogo(website, id);
    res.status(200).json(catalogo);
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATALOGO", error);
  }
};
const createCtrl = async (req, res) => {
  try {
    const body = req.body;
    const { website } = req.params;
    const imageUrl = req.file.location;
    const data = await createCatalogo(body, website, imageUrl);
    res.status(200).json({ msg: "created successfully", data });
  } catch (error) {
    handleHttp(res, "ERROR_POST_CATALOGO", error);
  }
};
const updateCtrl = async (req, res) => {
  try {
    const body = req.body;
    const { website, id } = req.params;
    const data = await updateCatalogo(body, website, id);
    res.status(200).json({ msg: "Updated successfully", data });
  } catch (error) {
    handleHttp(res, "ERROR_PUT_CATALOGO", error);
  }
};
const deleteCtrl = async (req, res) => {
  try {
    const { website, id } = req.params;
    const data = await deleteCatalogo(website, id);
    res.status(200).json({ msg: "Deleted successfully", data });
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_CATALOGO", error);
  }
};

module.exports = {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
};
