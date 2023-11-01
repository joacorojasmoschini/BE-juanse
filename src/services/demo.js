const { DemoSurtonica, DemoJuanse } = require("../models/demo");

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
  const { title, artists, date} = body;
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
  if(website === "surtonica") {
    const allDemos = await DemoSurtonica.findByIdAndDelete(id)
    return allDemos
  } else if (website === "juanse") {
    const allDemos = await DemoJuanse.findByIdAndDelete(id)
    return allDemos;
  }
};

module.exports = {
  getDemos,
  getDemo,
  createDemo,
  updateDemo,
  deleteDemo,
};
