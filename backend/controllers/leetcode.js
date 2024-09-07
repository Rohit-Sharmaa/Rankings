import dotenv from "dotenv";
import fetch from "node-fetch";
import User from "../models/user.model.js";

dotenv.config();

export const leetcode = async (req, res) => {
  try {
    const { leetcodeUsername } = req.body;
    const userId = req.user.userId;

    const baseUrl = process.env.LEETCODE_API_BASE_URL;
    const apiUrl = `${baseUrl}/${leetcodeUsername}`;
    console.log(`Fetching from: ${apiUrl}`);

    const response = await fetch(apiUrl);
    console.log(`Response status: ${response.status}`);

    const data = await response.json();
    console.log("API data:", data);

    const { matchedUser, userContestRanking } = data?.data || {};

    if (
      !leetcodeUsername ||
      (matchedUser === null && userContestRanking == null)
    ) {
      return res
        .status(400)
        .json({ message: "Please Provide a Valid Leetcode Username" });
    }

    const username = matchedUser?.username || "N/A";
    const profilePicture = matchedUser?.profile?.userAvatar || "";
    const rating = Math.ceil(userContestRanking?.rating || 0);
    const globalRanking = userContestRanking?.globalRanking || 0;
    const attendedContest = userContestRanking?.attendedContestsCount || 0;
    const streak = matchedUser?.userCalendar?.streak || 0;
    const totalActiveDays = matchedUser?.userCalendar?.totalActiveDays || 0;

    const questionSolved =
      matchedUser?.submitStats?.acSubmissionNum.find(
        (stat) => stat.difficulty === "All"
      )?.count || 0;
    const EasySolved =
      matchedUser?.submitStats?.acSubmissionNum.find(
        (stat) => stat.difficulty === "Easy"
      )?.count || 0;
    const MediumSolved =
      matchedUser?.submitStats?.acSubmissionNum.find(
        (stat) => stat.difficulty === "Medium"
      )?.count || 0;
    const HardSolved =
      matchedUser?.submitStats?.acSubmissionNum.find(
        (stat) => stat.difficulty === "Hard"
      )?.count || 0;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "CodingProfiles.leetcode.username": username,
          "CodingProfiles.leetcode.profilePicture": profilePicture,
          "CodingProfiles.leetcode.rating": rating,
          "CodingProfiles.leetcode.globalRanking": globalRanking,
          "CodingProfiles.leetcode.attendedContest": attendedContest,
          "CodingProfiles.leetcode.streak": streak,
          "CodingProfiles.leetcode.totalActiveDays": totalActiveDays,
          "CodingProfiles.leetcode.questionSolved": questionSolved,
          "CodingProfiles.leetcode.EasySolved": EasySolved,
          "CodingProfiles.leetcode.MediumSolved": MediumSolved,
          "CodingProfiles.leetcode.HardSolved": HardSolved,
        },
      },
      { new: true, projection: { password: 0 } }
    );

    if (!updatedUser) {
      console.error("User not found or update failed");
      return res
        .status(404)
        .json({ message: "User not found or update failed" });
    }

    console.log("User updated:", updatedUser);

    return res.status(200).json({
      message: "LeetCode profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
