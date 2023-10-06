const handleHttp = (res, error, errorRaw) => {
  console.log(errorRaw);
  res.status(500).json({ error });
};


const handleSession = (res, error) => {
  console.log(error);
  res.status(401).json({
    error,
    message: "Invalid session"
  });
};

module.exports = { handleHttp, handleSession };