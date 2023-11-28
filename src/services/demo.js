const { DemoSurtonica, DemoJuanse } = require("../models/demo");
const { s3 } = require('../utils/s3Handle')

const getDemos = async (website) => {
  if(website === "surtonica") {
    const allDemos = await DemoSurtonica.find();
    return allDemos
  } else if (website === "juanse") {
    const allDemos = await DemoJuanse.find();
    return allDemos;
  }
};
const getDemo = async (website, id) => {
  if(website === "surtonica") {
    const allDemos = await DemoSurtonica.findById(id);
    return allDemos
  } else if (website === "juanse") {
    const allDemos = await DemoJuanse.findById(id);
    return allDemos;
  }
};
const createDemo = async (body, website, files) => {
  const { title, artists, date, rol} = body;
  const {image, prod, original} = files;
  console.log(body);
  if (website === "surtonica") {
    const newDemo = await DemoSurtonica.create({
      title,
      artists,
      image: image[0].location,
      date,
      prod: prod[0].location,
      original: original[0].location,
      rol,
    });
    return newDemo;
  } else if (website === "juanse") {
    const newDemo = await DemoJuanse.create({
      title,
      artists,
      image: image[0].location,
      date,
      prod: prod[0].location,
      original: original[0].location,
      rol,
    });
    return newDemo;
  }
};

const updateDemo = async (body, website, id) => {
  if(website === "surtonica") {
    const allDemos = await DemoSurtonica.findByIdAndUpdate(id, body)
    return allDemos
  } else if (website === "juanse") {
    const allDemos = await DemoJuanse.findByIdAndUpdate(id, body)
    return allDemos;
  }
};

const deleteDemo = async (website, id) => {
  let catalogoModel;
  if (website === 'surtonica') {
    catalogoModel = CatalogoSurtonica;
  } else if (website === 'juanse') {
    catalogoModel = CatalogoJuanse;
  } else {
    throw new Error('website not found');
  }
  const catalogo = await catalogoModel.findById(id);
  if (!catalogo) {
    throw new Error('catalago dont found');
  }
  const deletedCatalogo = await catalogoModel.findByIdAndDelete(id);
  const key = catalogo.image;
  await s3.send(new DeleteObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: key }));
  return deletedCatalogo;
};

module.exports = {
  getDemos,
  getDemo,
  createDemo,
  updateDemo,
  deleteDemo,
};
