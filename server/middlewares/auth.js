import Food from "../model/Food.js";
import { Jwt } from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = json.authToken;
    if (!token) {
      return res.status(400).json({
        message: "Login to Access this resource",
      });
    }
    const decoded = jwt.verify(token, jwtSecret);

    const user = await Food.findById(decoded._id);

    req.user = user;

    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
