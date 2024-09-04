import express from "express";
import { signup, verifyOtp } from "../controllers/signup.controller.js";

const router = express.Router();

router.get("/signup", signup);
router.post("/verifyOtp", verifyOtp);

router.get("/info", (req, res) => {
  res.status(201).json("I am auth router file");
});

export default router;
