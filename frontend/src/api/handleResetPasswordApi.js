import apiClient from "../config/axiosConfig";
import { toast } from "react-toastify";

export const handleResetPasswordApi = async (email, OTP, password) => {
  try {
    console.log("rester pass word-->", email, OTP, password);

    if (!email || !OTP || !password) {
      toast.error("Email , otp & password are required");
      return false;
    }

    const result = await apiClient.post("/api/auth/resetPassword", {
      email,
      otp: OTP,
      password,
    });

    const data = result.data;

    if (result.status === 200) {
      toast.success("Password reset succesfully");
      return true;
    } else {
      toast.error(data.message || "Something went wrong");
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    toast.error(errorMessage);
    console.log("Error message:", errorMessage);
    return false;
  }
};
