const { handleSession } = require("../utils/errorHandle");
const { verifyToken } = require("../utils/jwtHandle");

const checkSession = (req, res, next) => {
  try {
    const cookies = req.headers.cookie;
    if (!cookies) {
      return res
        .status(401)
        .json({ session: false, message: "no cookies found" });
    }
    const cookiesArray = cookies.split(";").map((cookie) => cookie.trim());

    let token = null;
    for (const cookie of cookiesArray) {
      if (cookie.startsWith("token=")) {
        token = cookie.substring("token=".length);
        break;
      }
    }

    if (!token) {
      return res
        .status(401)
        .json({ session: false, message: "no token found in cookies" });
    }

    const jwt = token.split(" ").pop();
    const user = verifyToken(jwt);

    if (!user) {
      res.status(401).json({
        session: false,
        message: "Unauthorized",
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
