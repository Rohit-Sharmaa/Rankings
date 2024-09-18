import dotenv from "dotenv";
import fetch from "node-fetch"; // Ensure node-fetch is installed
import User from "../models/user.model.js";

dotenv.config();

export const geeksforgeeks = async (req, res) => {
  try {
    const { gfgUsername } = req.body;
    const userId = req.user.userId;

    if (!gfgUsername) {
      return res
        .status(400)
        .json({ message: "GeeksforGeeks username is required" });
    }

    const baseUrl = process.env.GEEKSFORGEEKS_API_BASE_URL;
    if (!baseUrl) {
      throw new Error("GEEKSFORGEEKS_API_BASE_URL is not defined");
    }

    const apiUrl = `${baseUrl}/${gfgUsername}`;

    console.log(`Fetching from: ${apiUrl}`);

    const response = await fetch(apiUrl);
    console.log("geeks for geeks response", response);
    if (!response.ok) {
      console.error(
        `Failed to fetch from GeeksforGeeks: ${response.status} ${response.statusText}`
      );
      return res
        .status(response.status)
        .json({ message: "Failed to fetch data from GeeksforGeeks" });
    }

    const data = await response.json();
    console.log("data----", data);

    if (
      !data.info  ) {
      return res
        .status(400)
        .json({ message: "Invalid GFG username or no data available" });
    }
    const gfgData = {
      username: data.info.userName || gfgUsername,
      instituteRank: data.info.instituteRank || 0,
      questionSolved: parseInt(data.info.totalProblemsSolved, 10) || 0,
      codingScore: parseInt(data.info.codingScore, 10) || 0,
      EasySolved: data.solvedStats?.easy?.count || 0,
      MediumSolved: data.solvedStats?.medium?.count || 0,
      HardSolved: data.solvedStats?.hard?.count || 0,
      userAvatar: data.info.profilePicture || "",
    };
    console.log(data.info.profilePicture);
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
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
