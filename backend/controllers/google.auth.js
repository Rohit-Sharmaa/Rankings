import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import generateOTP from "../utils/generateOtp.js";
import OTPModel from "../models/user.otp.mode.js";
import bcrypt from "bcrypt";
export const googleAuthLogin = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { name },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ message: "User does't Not Exist" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    return res.status(200).json({ message: "Login Successfully", token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const googleAuthSignup = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User Already Exists." });
    }

    const otp = generateOTP();
    const hashedOtp = await bcrypt.hash(otp, 10);

    await OTPModel.updateOne(
      { email },
      {
        $set: {
          otp: hashedOtp,
          expiredAt: Date.now() + 3 * 60000,
        },
      },
      { upsert: true }
    );

    const password =
      "" + generateOTP() + generateOTP() + Date.now() + generateOTP();

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    const token = jwt.sign(
      { userId: savedUser._id, email: savedUser.email },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    console.log(savedUser._id);
    return res
      .status(200)
      .json({ message: "User Registered Successfully", token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
