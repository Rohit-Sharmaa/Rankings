import express from "express";
import { leetcode } from "../controllers/leetcode.js";
import { verifyToken } from "../utils/verifyToken.js";
import { geeksforgeeks } from "../controllers/geeksforgeeks.js";
import { codechef } from "../controllers/codechef.js";
import { codeforces } from "../controllers/codeforces.js";
import { getUserProfile } from "../controllers/getUserProfile.js";
const router = express.Router();

//i have to make this route protected
router.get("/leetcode", verifyToken, leetcode);
router.get("/geeksforgeeks", verifyToken, geeksforgeeks);
router.get("/codechef", verifyToken, codechef);
router.get("/codeforces", verifyToken, codeforces);
router.get("/getUserProfile", verifyToken, getUserProfile);

export default router;
