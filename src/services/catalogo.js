const { CatalogoSurtonica, CatalogoJuanse } = require("../models/catalogo");

const getCatalogos = async (website) => {
  if (website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.find();
    return allCatalogos;
  } else if (website === "juanse") {
    const allCatalogos = await CatalogoJuanse.find();
    return allCatalogos;
  }
};
const getCatalogo = async (website, id) => {
  if (website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.findById(id);
    return allCatalogos;
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
  try {
    let catalogoModel;

    if (website === "surtonica") {
      catalogoModel = CatalogoSurtonica;
    } else if (website === "juanse") {
      catalogoModel = CatalogoJuanse;
    } else {
      throw new Error("Sitio web no válido");
    }
    if (body.order){
      const catalogo = await catalogoModel.findById(id);
      const currentOrder = catalogo.order;
      const existingCatalogo = await catalogoModel.findOne({order: body.order});
      if(existingCatalogo){
        await catalogoModel.findByIdAndUpdate(existingCatalogo.id, {order: currentOrder})
      }
    }
    const updatedCatalogo = await catalogoModel.findByIdAndUpdate(id, body);
    return updatedCatalogo;
  } catch (error) {
    throw new Error("Error al actualizar el elemento: " + error.message);
  }
};

const deleteCatalogo = async (website, id) => {
  if (website === "surtonica") {
    const allCatalogos = await CatalogoSurtonica.findByIdAndDelete(id);
    return allCatalogos;
  } else if (website === "juanse") {
    const allCatalogos = await CatalogoJuanse.findByIdAndDelete(id);
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
