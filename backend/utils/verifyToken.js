import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const verifyToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Please login or Register." });
    }

    const tokenWithoutBearer = token.replace("Bearer ", "");

    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET_KEY);

    req.user = verified;

    next();
  } catch (error) {
    console.log(error.message);
    return res
      .status(401)
      .json({ message: "Token expired. Please log in again." });
  }
};
