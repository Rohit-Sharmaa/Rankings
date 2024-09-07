import dotenv from "dotenv";
import fetch from "node-fetch"; // Ensure node-fetch is installed
import User from "../models/user.model.js";
dotenv.config();

export const geeksforgeeks = async (req, res) => {
  try {
    const { gfgUsername } = req.body;
    const userId = req.user.userId;

    const baseUrl = process.env.GEEKSFORGEEKS_API_BASE_URL;
    const apiUrl = `${baseUrl}/${gfgUsername}`;
    console.log(`Fetching from: ${apiUrl}`);

    const response = await fetch(apiUrl);

    if (response.status !== 200) {
      return res
        .status(400)
        .json({ message: "Please provide a valid username" });
    }

    const data = await response.json();

    const gfgData = {
      username: data.info.userName || gfgUsername,
      instituteRank: data.info.instituteRank || 0,
      questionSolved: parseInt(data.info.totalProblemsSolved) || 0,
      codingScore: parseInt(data.info.codingScore) || 0,
      EasySolved: data.solvedStats.easy.count || 0,
      MediumSolved: data.solvedStats.medium.count || 0,
      HardSolved: data.solvedStats.hard.count || 0,
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "CodingProfiles.gfg": gfgData,
        },
      },
      { new: true, projection: { password: 0 } }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "GeeksforGeeks data updated successfully",
      data: updatedUser.CodingProfiles.gfg,
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
