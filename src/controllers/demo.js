const { handleHttp } = require("../utils/errorHandle");
const {
  getDemos,
  getDemo,
  createDemo,
  updateDemo,
  deleteDemo,
} = require("../services/demo");


const getAllCtrl = async (req, res) => {
  try {
    const { website } = req.params;
    const demos = await getDemos(website);
    res.status(200).json(demos);
  } catch (error) {
    handleHttp(res, "ERROR_GET_DEMOS", error);
  }
};
const getCtrl = async (req, res) => {
  try {
    const { website, id } = req.params;
    const demo = await getDemo(website, id);
    res.status(200).json(demo);
  } catch (error) {
    handleHttp(res, "ERROR_GET_DEMO", error);
  }
};
const createCtrl = async (req, res) => {
  try {
    const body = req.body;
    const { website } = req.params;
    const data = await createDemo(body, website);
    res.status(200).json({ msg: "creado correctamente", data });
  } catch (error) {
    handleHttp(res, "ERROR_POST_DEMO", error);
  }
};
const updateCtrl = async (req, res) => {
  try {
    const body = req.body;
    const { website, id } = req.params;
    const data = await updateDemo(body, website, id);
    res.status(200).json({ msg: "actualizado correctamente", data });
  } catch (error) {
    handleHttp(res, "ERROR_PUT_DEMO", error);
  }
};
const deleteCtrl = async (req, res) => {
  try {
    const { website, id } = req.params;
    const data = await deleteDemo(website, id);
    res.status(200).json({ msg: "eliminado correctamente", data });
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_DEMO", error);
  }
};

module.exports = {
  getAllCtrl,
  getCtrl,
  createCtrl,
  updateCtrl,
  deleteCtrl,
};
