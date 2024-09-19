import apiClient from "../config/axiosConfig";
import { toast } from "react-toastify";

export const getAnalyzeApi = async () => {
  try {
    console.log("getting request in getAnalyzeapi");
    const token = localStorage.getItem("Ranking-token");

    if (!token) {
      toast.error("Please Login or Register");
      return { status: 401, message: "Unauthorized: Please login" };
    }

    const result = await apiClient.get("/api/profiles/getUserProfile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = result.data;

    if (result.status === 200) {
      toast.success("Here is your Coding Profiles details");
      return data;
    } else if (result.status === 400) {
      toast.error(data.message || "Something went wrong");
      return { status: 400, message: data.message || "Bad Request" };
    } else {
      toast.error(data.message || "Something went wrong");
      return {
        status: result.status,
        message: data.message || "Unknown Error",
      };
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong while fetching user profile";
    toast.error(errorMessage);
    return { status: error.response?.status || 500, message: errorMessage };
  }
};
