import apiClient from "../config/axiosConfig";
import { toast } from 'react-toastify';

export const getAnalyzeApi = async () => {
  try {
    console.log("getting request");
    const token = localStorage.getItem("Ranking-token");

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
      return data;
    } else {
      toast.error(data.message || "Something went wrong");
      return false;
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong while fetching user profile";
    toast.error(errorMessage);
    return false;
  }
};
