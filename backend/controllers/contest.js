import { getUpcomingContests } from "../utils/upcomingContest.js";

export const contest = async (req, res) => {
  try {
    const contestData = await getUpcomingContests();
    if (contestData) {
      return res.status(200).json({ message: "upcoming contest", contestData });
    } else {
      return res.status(500).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
