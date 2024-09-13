import express from "express";
import { signup, verifyOtp } from "../controllers/signup.controller.js";
import {
  googleAuthLogin,
  googleAuthSignup,
} from "../controllers/google.auth.js";
import {
  forgetPassword,
  resetPassword,
} from "../controllers/forgetPassword.js";
import { login } from "../controllers/login.js";
import ApiLimit from "../utils/ApiRateLimiter.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/signUpVerify", verifyOtp);
router.post("/login", ApiLimit, login);
router.post("/googleLogin", googleAuthLogin);
router.post("/googleSignup", googleAuthSignup);
router.post("/forgetPassword", forgetPassword);
router.post("/resetPassword", resetPassword);

router.get("/info", (req, res) => {
  res.status(201).json("I am auth router file");
});

export default router;
