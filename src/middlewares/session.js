const { handleSession } = require('../utils/errorHandle');
const { verifyToken } = require('../utils/jwtHandle');

const checkSession = (req, res, next) => {
  try {
    const token = req.headers.authorization
    
    const jwt = token.split(" ").pop();
    const user = verifyToken(`${jwt}`);
    
    if (!user){
      res.status(401).json({
        message: "Unauthorized"
      });
    } else {
      req.user = user;
      next();
    }
  } catch (error) {
    handleSession(res, error);
  }
};

module.exports = { checkSession };