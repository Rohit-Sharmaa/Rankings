import apiClient from "../config/axiosConfig";
import { toast } from "react-toastify";

export const handleLoginApi = async (email, password) => {
  try {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    const result = await apiClient.post("/api/auth/login", {
      email,
      password,
    });

    const data = result.data;

    if (result.status === 200) {
      console.log("User exists:", data.message);
      console.log("JWT Token:", data.token);

      toast.success("Logged in successfully!");
      localStorage.setItem("Ranking-token", data.token);
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
