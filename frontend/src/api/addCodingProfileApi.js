import apiClient from "./../config/axiosConfig";
import { Toast } from "../components/Toast/toast";
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
        alert("Leetcode profile is added!");
      } else if (res.status === 401) {
        alert("Please create your account to Add profile");
      } else {
        alert(
          data.message || "Something went wrong while adding leetcode profile"
        );
      }
    } catch (error) {
      console.error("Error adding LeetCode profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding Leetcode profile";
      alert(errorMessage);
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
        alert("Codechef profile is added!");
      } else if (res.status === 401) {
        alert("Please create your account to Add profile");
      } else {
        alert(
          data.message || "Something went wrong while adding Codechef profile"
        );
      }
    } catch (error) {
      console.error("Error adding Codechef profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding Codechef profile";
      alert(errorMessage);
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
        alert("Codeforces profile is added!");
      } else if (res.status === 401) {
        alert("Please create your account to Add profile");
      } else {
        alert(
          data.message || "Something went wrong while adding Codeforces profile"
        );
      }
    } catch (error) {
      console.error("Error adding Codeforces profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding Codeforces profile";
      alert(errorMessage);
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
        alert("GeeksforGeeks profile is added!");
      } else if (res.status === 401) {
        alert("Please create your account to Add profile");
      } else {
        alert(
          data.message ||
            "Something went wrong while adding GeeksforGeeks profile"
        );
      }
    } catch (error) {
      console.error("Error adding GeeksforGeeks profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong while adding GeeksforGeeks profile";
      alert(errorMessage);
    }
  },
};
