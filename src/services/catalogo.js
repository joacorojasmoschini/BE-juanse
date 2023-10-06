const { CatalogoSurtonica, CatalogoJuanse } = require("../models/catalogo");

const getCatalogos = async (website) => {};
const getCatalogo = async (website, id) => {};
const createCatalogo = async (body, website) => {
  const { title, artists, image, date, spotify, youtube, order } = body;
  if (website === "surtonica") {
    const newCatalogo = await CatalogoSurtonica.create({
      title,
      artists,
      image,
      date,
      spotify,
      youtube,
      order,
    });
    return newCatalogo;
  } else if (website === "juanse") {
    const newCatalogo = await CatalogoJuanse.create({
      title,
      artists,
      image,
      date,
      spotify,
      youtube,
      order,
    });
    return newCatalogo;
  }
};
const updateCatalogo = async (body, website, id) => {};
const deleteCatalogo = async (website, id) => {};

module.exports = {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo,
};
