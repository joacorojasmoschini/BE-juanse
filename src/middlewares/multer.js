const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = require("../utils/s3Handle");
require("dotenv").config();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    key: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

module.exports = { upload };
