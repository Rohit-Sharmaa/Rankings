import apiClient from "../config/axiosConfig";
import { toast } from "react-toastify";

export const resendOtpApi = async (email) => {
  try {
    console.log("sentOtpapi-->", email);

    if (!email) {
      toast.error("Email is required");
      return false;
    }

    const result = await apiClient.post("/api/auth/resendOtp", {
      email,
    });

    const data = result.data;

    if (result.status === 200) {
      toast.error("OTP sent to your email");
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
