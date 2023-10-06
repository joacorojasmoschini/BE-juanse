const getCatalogos = (req, res) => {
  res.send("get catalogos route")
};
const getCatalogo = (req, res) => {
  res.send("get catalogo route")
};
const createCatalogo = (req, res) => {
  res.send("post catalogos route")
};
const updateCatalogo = (req, res) => {
  res.send("put catalogos route")
};
const deleteCatalogo = (req, res) => {
  res.send("delete catalogos route")
};

module.exports = {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo
}
