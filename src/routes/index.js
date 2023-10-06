const { Router } = require("express");
const { readdirSync } = require("fs");

const router = Router();
const PATH_ROUTER = __dirname;

const cleanName = (fileName) => {
  const name = fileName.split(".").shift();
  return name;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanFileName = cleanName(fileName);
  if (cleanFileName !== "index") {
    const moduleRouter = require(`./${cleanFileName}`);
    router.use(`/${cleanFileName}`, moduleRouter.router);
  }
});

module.exports = { router };