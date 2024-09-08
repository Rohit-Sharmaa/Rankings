import dotenv from "dotenv";
import fetch from "node-fetch";
import User from "../models/user.model.js";
dotenv.config();

export const codeforces = async (req, res) => {
  try {
    const { codeforcesUsername } = req.body;
    const userId = req.user.userId;

    if (!codeforcesUsername) {
      return res
        .status(400)
        .json({ message: "codeforces username is required" });
    }

    const baseUrl1 = process.env.CODEFORCES_API_BASE_URL_FOR_USER_INFO;
    const apiUrl1 = `${baseUrl1}${codeforcesUsername}`;

    let response = await fetch(apiUrl1);

    let data = await response.json();
    if (data.status === "FAILED") {
      return res.status(400).json({ message: "Invalid codeforces username" });
    }

    const baseUrl2 = process.env.CODEFORCES_API_BASE_URL_FOR_USER_ACS;
    const apiUrl2 = `${baseUrl2}${codeforcesUsername}`;

    let respoonse2 = await fetch(apiUrl2);
    let statusData = await respoonse2.json();

    let solved = new Set();
    statusData.result.forEach((submission) => {
      if (submission.verdict === "OK") {
        solved.add(
          `${submission.problem.contestId}/${submission.problem.index}`
        );
      }
    });

    const codeforcesData = {
      username: codeforcesUsername,
      rating: data.result[0].rating,
      rank: data.result[0].rank,
      maxRank: data.result[0].maxRank,
      maxRating: data.result[0].maxRating,
      questionSolved: solved.size || 0,
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "CodingProfiles.codeforces": codeforcesData,
        },
      },
      { new: true, projection: { password: 0 } }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "codeforces data updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
