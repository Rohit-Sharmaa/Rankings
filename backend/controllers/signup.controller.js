import OTPModel from "../models/user.otp.mode.js";
import generateOTP from "../utils/generateOtp.js";
import { sendEmail } from "../utils/sendEmail.utils.js";
import User from "./../models/user.model.js";
import bcrypt from "bcrypt";
export async function signup(req, res) {
  try {
    const { email } = req.body;
    if (email === undefined || email === null) {
      return res.json({ message: "Please enter a email" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }

    const otp = generateOTP();
    await OTPModel.findOneAndUpdate(
      { email },
      {
        otp,
        expiredAt: Date.now() + 3 * 60000,
      },
      { upsert: true, new: true }
    );

    //need to add a email service to send email to their email

    await sendEmail(email, otp);

    res.json({
      message: `OTP sent to your email. This otp is valid only for 3 minutes`,
    });
  } catch (error) {
    console.log(error.message);

    return res.json({ message: "Something went wrong" });
  }
}

export async function verifyOtp(req, res) {
  const { email, otp, password } = req.body;

  if (email === undefined || !otp || !password) {
    return res.send({ message: "Please provide valid credentials" });
  }

  const otpEntry = await OTPModel.findOne({ email, otp });

  if (!otpEntry) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  if (otpEntry.expiredAt < Date.now()) {
    return res.status(400).json({ message: "OTP expired" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  return res.json({ message: "User created successfully" });
}
