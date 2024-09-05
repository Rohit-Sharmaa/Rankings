import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, otp) => {
  const mailOption = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. This OTP is valid only for 3 minutes.`,
  };

  try {
    await transporter.sendMail(mailOption);
    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Failed to send email: ", error.message);
    return false;
  }
};
export { sendEmail };
