import apiClient from "./../config/axiosConfig";
import { toast } from "react-toastify";


export const addCodingProfileApi = {
  addLeetcodeProfile: async (username) => {
    try {
      const token = localStorage.getItem("Ranking-token");

      const res = await apiClient.post(
        "/api/profiles/leetcode",
        { leetcodeUsername: username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      if (res.status === 200) {
        toast.success("Leetcode profile is added!");
      } else if (res.status === 401) {
        toast.error("Please create your account to add a profile");
      } else {
        toast.error(data.message || "Something went wrong while adding Leetcode profile");
      }
    } catch (error) {
      console.error("Error adding LeetCode profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding Leetcode profile";
      toast.error(errorMessage);
    }
  },

  addCodechefProfile: async (username) => {
    try {
      const token = localStorage.getItem("Ranking-token");
      console.log(username);

      const res = await apiClient.post(
        "/api/profiles/codechef",
        { codechefUsername: username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      if (res.status === 200) {
        toast.success("Codechef profile is added!");
      } else if (res.status === 401) {
        toast.error("Please create your account to add a profile");
      } else {
        toast.error(data.message || "Something went wrong while adding Codechef profile");
      }
    } catch (error) {
      console.error("Error adding Codechef profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding Codechef profile";
      toast.error(errorMessage);
    }
  },

  addCodeforcesProfile: async (username) => {
    try {
      const token = localStorage.getItem("Ranking-token");

      const res = await apiClient.post(
        "/api/profiles/codeforces",
        { codeforcesUsername: username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      if (res.status === 200) {
        toast.success("Codeforces profile is added!");
      } else if (res.status === 401) {
        toast.error("Please create your account to add a profile");
      } else {
        toast.error(data.message || "Something went wrong while adding Codeforces profile");
      }
    } catch (error) {
      console.error("Error adding Codeforces profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding Codeforces profile";
      toast.error(errorMessage);
    }
  },

  addGeeksforGeeksProfile: async (username) => {
    try {
      const token = localStorage.getItem("Ranking-token");

      const res = await apiClient.post(
        "/api/profiles/geeksforgeeks",
        { gfgUsername: username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = res.data;
      if (res.status === 200) {
        toast.success("GeeksforGeeks profile is added!");
      } else if (res.status === 401) {
        toast.error("Please create your account to add a profile");
      } else {
        toast.error(data.message || "Something went wrong while adding GeeksforGeeks profile");
      }
    } catch (error) {
      console.error("Error adding GeeksforGeeks profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding GeeksforGeeks profile";
      toast.error(errorMessage);
    }
  },
};
