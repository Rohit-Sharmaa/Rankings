import express from "express";
import { leetcode } from "../controllers/leetcode.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//i have to make this route protected
router.get("/leetcode", verifyToken, leetcode);

export default router;
