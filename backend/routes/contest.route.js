import express from "express";
import { contest } from "../controllers/contest.js";
const router = express.Router();

router.get("/upcoming", contest);

export default router;
