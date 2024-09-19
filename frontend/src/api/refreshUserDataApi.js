import { toast } from "react-toastify";
import apiClient from "../config/axiosConfig";

export const refreshUserDataApi = async () => {
  try {
    const token = localStorage.getItem("Ranking-token");

    if (!token) {
      toast.error("Please Login or Register");
      return { status: 401, message: "Unauthorized: Please login" };
    }

    toast.success("We are updating your data");
    const result = await apiClient.post(
      "/api/profiles/updateProfile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = result.data;

    if (result.status === 200) {
      toast.success("We have updated your profiles");
    } else if (result.status === 400) {
      toast.error(data.message || "Something went wrong");
    } else {
      toast.error(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong while fetching user profile";
    toast.error(errorMessage);
  }
};
