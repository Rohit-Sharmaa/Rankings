import express from "express";
import { getContest } from "../controllers/contest.js";
const router = express.Router();
import ApiLimit from "../utils/ApiRateLimiter.js";
router.get("/upcoming", ApiLimit, getContest);

export default router;
