import dotenv from "dotenv";
import fetch from "node-fetch";
import User from "../models/user.model.js";

dotenv.config();

export const codechef = async (req, res) => {
  try {
    const { codechefUsername } = req.body;
    const userId = req.user.userId;

    if (!codechefUsername) {
      return res.status(400).json({ message: "Codechef username is required" });
    }
    const baseUrl = process.env.CODECHEF_API_BASE_URL;

    const apiUrl = `${baseUrl}/${codechefUsername}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Failed to fetch data from Codechef" });
    }

    const data = await response.json();
    console.log(data);

    if (data.success === false) {
      return res.status(400).json({ message: "Invalid Codechef username" });
    }

    const codechefData = {
      username: codechefUsername,
      rating: data.currentRating,
      maxRating: data.highestRating,
      globalRank: data.globalRank,
      countryRank: data.countryRank,
      stars: data.stars ? data.stars.charAt(0) : 0,
      userAvatar: data.profile || "",
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          "CodingProfiles.codechef": codechefData,
        },
      },
      { new: true, projection: { password: 0 } }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Codechef data updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user data:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
