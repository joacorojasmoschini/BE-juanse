const { CatalogoSurtonica, CatalogoJuanse } = require("../models/catalogo");

const getCatalogos = async (website) => {
  if(website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.find();
    return allCatalogos
  } else if (website === "juanse") {
    const allCatalogos = await CatalogoJuanse.find();
    return allCatalogos;
  }
};
const getCatalogo = async (website, id) => {
  if(website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.findById(id);
    return allCatalogos
  } else if (website === "juanse") {
    const allCatalogos = await CatalogoJuanse.findById(id);
    return allCatalogos;
  }
};
const createCatalogo = async (body, website, imageUrl) => {
  const { title, artists, date, spotify, youtube, order } = body;
  if (website === "surtonica") {
    const newCatalogo = await CatalogoSurtonica.create({
      title,
      artists,
      image: imageUrl,
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
      image: imageUrl,
      date,
      spotify,
      youtube,
      order,
    });
    return newCatalogo;
  }
};
const updateCatalogo = async (body, website, id) => {
  if(website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.findByIdAndUpdate(id, body)
    return allCatalogos
  } else if (website === "juanse") {
    const allCatalogos = await CatalogoJuanse.findByIdAndUpdate(id, body)
    return allCatalogos;
  }
};
const deleteCatalogo = async (website, id) => {
  if(website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.findByIdAndDelete(id)
    return allCatalogos
  } else if (website === "juanse") {
    const allCatalogos = await CatalogoJuanse.findByIdAndDelete(id)
    return allCatalogos;
  }
};

module.exports = {
  getCatalogos,
  getCatalogo,
  createCatalogo,
  updateCatalogo,
  deleteCatalogo,
};
