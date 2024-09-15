import apiClient from "../config/axiosConfig";

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
      alert("Here is your Coding Profiles details");
      return data;
    } else if (result.status === 400) {
      alert(data.message || "Something went wrong ");
      return data;
    } else {
      alert(data.message || "Something went wrong ");
      return false;
    }
  } catch (error) {
    console.error("Error adding LeetCode profile:", error);
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong while adding Leetcode profile";
    alert(errorMessage);
    return false;
  }
};
