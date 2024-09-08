import express from "express";
import { leetcode } from "../controllers/leetcode.js";
import { verifyToken } from "../utils/verifyToken.js";
import { geeksforgeeks } from "../controllers/geeksforgeeks.js";
import { codechef } from "../controllers/codechef.js";
import { codeforces } from "../controllers/codeforces.js";
import { getUserProfile } from "../controllers/getUserProfile.js";
const router = express.Router();

//i have to make this route protected
router.post("/leetcode", verifyToken, leetcode);
router.post("/geeksforgeeks", verifyToken, geeksforgeeks);
router.post("/codechef", verifyToken, codechef);
router.post("/codeforces", verifyToken, codeforces);

router.get("/getUserProfile", verifyToken, getUserProfile);

export default router;
