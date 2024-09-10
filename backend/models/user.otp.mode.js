import { mongo, mongoose } from "mongoose";

const OTPSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    otp: {
      type: String,
      required: true,
    },

    expiredAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const OTPModel = mongoose.model("OTP", OTPSchema);
export default OTPModel;
