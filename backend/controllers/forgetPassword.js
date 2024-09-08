import User from "../models/user.model.js";
import OTPModel from "../models/user.otp.mode.js";
import generateOTP from "../utils/generateOtp.js";
import { sendEmail } from "../utils/sendEmail.utils.js";
import bcrypt from "bcrypt";

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ message: "Please enter a email" });
    }
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "User  does't  exist" });
    }

    const otp = generateOTP();
    const result = await sendEmail(email, otp);
    if (!result) {
      return res.status(400).json({ message: "Please Provide a valid email" });
    }

    const hashedOtp = await bcrypt.hash(otp, 10);
    await OTPModel.findOneAndUpdate(
      { email },
      {
        otp: hashedOtp,
        expiredAt: Date.now() + 3 * 60000,
      },
      { upsert: true, new: true }
    );

    return res.json({
      message: `OTP sent to your email. This otp is valid only for 3 minutes`,
    });
  } catch (error) {
    console.log(error.message);
    return res.json({ message: "Something went wrong" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    if (!email || !otp || !password) {
      return res
        .status(400)
        .send({ message: "Please provide valid credentials" });
    }

    const otpEntry = await OTPModel.findOne({ email });

    if (!otpEntry) {
      return res.status(400).json({ message: "Invalid OTP or Email" });
    }

    if (otpEntry.expiredAt < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    const isOtpValid = await bcrypt.compare("" + otp, otpEntry.otp);
    if (!isOtpValid) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );

    return res.json({ message: "Password updated successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
