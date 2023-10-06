const {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo,
} = require("../services/catalogo");
const { handleHttp } = require("../utils/errorHandle");

const getAllCtrl = (req, res) => {
  try {
    res.send("get catalogos route");
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATALOGOS", error);
  }
};
const getCtrl = (req, res) => {
  try {
    res.send("get catalogo route");
  } catch (error) {
    handleHttp(res, "ERROR_GET_CATALOGO", error);
  }
};
const createCtrl = (req, res) => {
 try {
  res.send("post catalogos route");
 } catch (error) {
  handleHttp(res, "ERROR_POST_CATALOGO", error);
 }
};
const updateCtrl = (req, res) => {
  try {
    res.send("put catalogos route");
  } catch (error) {
    handleHttp(res, "ERROR_PUT_CATALOGO", error);
  }
};
const deleteCtrl = (req, res) => {
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
