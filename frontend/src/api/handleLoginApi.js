import apiClient from "../config/axiosConfig";
import { toast } from "react-toastify";

export const handleLoginApi = async (
  email,
  password,
  dispatch,
  signInStart,
  signInSuccess,
  signInFailure
) => {
  try {
    dispatch(signInStart());
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
      dispatch(signInSuccess(data));
      return true;
    } else {
      toast.error(data.message || "Something went wrong");
      dispatch(signInFailure(data.message));
      return false;
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Something went wrong";
    toast.error(errorMessage);
    dispatch(signInFailure(error));
    console.log("Error message:", errorMessage);
    return false;
  }
};
