import UpcomingContestModel from "../models/upcomingContest.model.js";
import { getUpcomingContests } from "../utils/upcomingContest.js";

export const getContest = async (req, res) => {
  try {
    const contestData = await UpcomingContestModel.find({});
    console.log("Here is contest data --> ", contestData);
    if (contestData) {
      return res.status(200).json({ message: "upcoming contest", contestData });
    } else {
      return res.status(500).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const automatedContestDataUpdate = async () => {
  try {
    console.log("Fetching upcoming contest data...");
    const contestData = await getUpcomingContests();

    if (contestData && contestData.objects && contestData.objects.length > 0) {
      await UpcomingContestModel.deleteMany({});

      const formattedContestData = contestData.objects.map((contest) => ({
        id: contest.id,
        event: contest.event,
        host: contest.host,
        href: contest.href,
        start: new Date(contest.start),
        end: new Date(contest.end),
        duration: contest.duration,
      }));

      await UpcomingContestModel.insertMany(formattedContestData);

      console.log("Successfully updated upcoming contest data");
    } else {
      console.log("No contest data available to update.");
    }
  } catch (error) {
    console.error("Error storing contest data:", error);
  }
};
