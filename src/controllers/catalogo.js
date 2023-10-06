const {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo,
} = require("../services/catalogo");
const { handleHttp } = require("../utils/errorHandle");

const getAllCtrl = async (req, res) => {
  try {
    res.send("get catalogos route");
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATALOGOS", error);
  }
};
const getCtrl = async (req, res) => {
  try {
    res.send("get catalogo route");
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATALOGO", error);
  }
};
const createCtrl = async (req, res) => {
  try {
    const body = req.body;
    const { website } = req.params;
    const create = await createCatalogo(body, website);
    res.status(200).json({msg: "creado correctamente", create});
  } catch (error) {
    handleHttp(res, "ERROR_POST_CATALOGO", error);
  }
};
const updateCtrl = async (req, res) => {
  try {
    res.send("put catalogos route");
  } catch (error) {
    handleHttp(res, "ERROR_PUT_CATALOGO", error);
  }
};
const deleteCtrl = async (req, res) => {
  try {
    res.send("delete catalogos route");
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
