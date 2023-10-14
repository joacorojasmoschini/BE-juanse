const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs"); 
require('dotenv').config();

const client = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_PUBLIC_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
  }
});

const uploadFile = async (file) => {
  const steam = fs.createReadStream(file);
  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: "izi.png",
    Body: steam
  }
  const command = new PutObjectCommand(uploadParams);
  await client.send(command);
}

module.exports = {
  uploadFile
}