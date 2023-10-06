const handleHttp = (res, error, errorRaw) => {
  console.log(errorRaw);
  res.status(500).json({ error });
};

module.exports = { handleHttp };