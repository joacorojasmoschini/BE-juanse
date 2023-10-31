const handleHttp = (res, error, errorRaw) => {
  console.log(errorRaw);
  res.status(500).json({ error, errorRaw });
};


const handleSession = (res, error) => {
  console.log(error);
  res.status(401).json({
    error,
    session: false,
    message: "invalid session"
  });
};

module.exports = { handleHttp, handleSession };