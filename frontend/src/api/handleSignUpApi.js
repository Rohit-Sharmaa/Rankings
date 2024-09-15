import apiClient from "../config/axiosConfig";
import { toast } from "react-toastify";

export const handleSignUpApi = async (email, OTP, password) => {
  try {
    if (!email || !password || !OTP) {
      toast.error("Email, password and otp are required");
      return false;
    }

    console.log(email, " ", OTP, " ", password);

    const result = await apiClient.post("/api/auth/signUpVerify", {
      email,
      otp: OTP,
      password,
    });

    const data = result.data;
    console.log("result object in hanlesingup api--", result);
    console.log("data boject in handlesigup api -->", data);
    if (result.status === 200) {
      console.log("singup api Ranking--token", data.token);
      localStorage.setItem("Ranking-token", data.token);
      toast.success("successfully Registered!");
      return true;
    } else {
      toast.error(data.message || "Registration failed");
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong during signup";
    toast.error(errorMessage);
    console.log("Error message:", errorMessage);
    return false;
  }
};

export const sentOtpApi = async (email) => {
  try {
    console.log("sentOtpapi-->", email);

    if (!email) {
      toast.error("Email is required");
      return false;
    }

    const result = await apiClient.post("/api/auth/signup", {
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
