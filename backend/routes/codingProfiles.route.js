import express from "express";
import { leetcode } from "../controllers/leetcode.js";
import { verifyToken } from "../utils/verifyToken.js";
import { geeksforgeeks } from "../controllers/geeksforgeeks.js";

const router = express.Router();

//i have to make this route protected
router.get("/leetcode", verifyToken, leetcode);
router.get("/geeksforgeeks", verifyToken, geeksforgeeks);

export default router;
