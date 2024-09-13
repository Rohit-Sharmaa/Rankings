import express from "express";
import { contest } from "../controllers/contest.js";
const router = express.Router();
import ApiLimit from "../utils/ApiRateLimiter.js";
router.get("/upcoming", ApiLimit, contest);

export default router;
