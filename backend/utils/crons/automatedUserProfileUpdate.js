import fetch from "node-fetch";
import User from "../../models/user.model.js";

const automatedUserProfileUpdate = async () => {
  try {
    const users = await User.find();
    console.log("Fetching and updating user profiles...");
    for (const user of users) {
      const { leetcode, gfg, codechef, codeforces } = user.CodingProfiles;

      if (leetcode.username) {
        const baseUrl = process.env.LEETCODE_API_BASE_URL;
        const apiUrl = `${baseUrl}/${leetcode.username}`;

        const response = await fetch(apiUrl);

        const data = await response.json();

        const { matchedUser, userContestRanking } = data?.data || {};

        const username = matchedUser?.username || leetcode.username;

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

        const userAvatar = matchedUser?.profile?.userAvatar;

        await User.findByIdAndUpdate(
          user._id,
          {
            $set: {
              "CodingProfiles.leetcode.username": username,

              "CodingProfiles.leetcode.rating": rating,
              "CodingProfiles.leetcode.globalRanking": globalRanking,
              "CodingProfiles.leetcode.attendedContest": attendedContest,
              "CodingProfiles.leetcode.streak": streak,
              "CodingProfiles.leetcode.totalActiveDays": totalActiveDays,
              "CodingProfiles.leetcode.questionSolved": questionSolved,
              "CodingProfiles.leetcode.EasySolved": EasySolved,
              "CodingProfiles.leetcode.MediumSolved": MediumSolved,
              "CodingProfiles.leetcode.HardSolved": HardSolved,
              "CodingProfiles.leetcode.userAvatar": userAvatar,
            },
          },
          { new: true, projection: { password: 0 } }
        );
      }

      if (gfg.username) {
        const baseUrl = process.env.GEEKSFORGEEKS_API_BASE_URL;
        const apiUrl = `${baseUrl}/${gfg.username}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        const gfgData = {
          username: data.info.userName || gfg.username,
          instituteRank: data.info.instituteRank || 0,
          questionSolved: parseInt(data.info.totalProblemsSolved, 10) || 0,
          codingScore: parseInt(data.info.codingScore, 10) || 0,
          EasySolved: data.solvedStats?.easy?.count || 0,
          MediumSolved: data.solvedStats?.medium?.count || 0,
          HardSolved: data.solvedStats?.hard?.count || 0,
          userAvatar: data.info.profilePicture || "",
        };

        await User.findByIdAndUpdate(
          user._id,
          {
            $set: {
              "CodingProfiles.gfg": gfgData,
            },
          },
          { new: true, projection: { password: 0 } }
        );
      }

      if (codechef.username) {
        const baseUrl = process.env.CODECHEF_API_BASE_URL;

        const apiUrl = `${baseUrl}/${codechef.username}`;

        const response = await fetch(apiUrl);

        const data = await response.json();

        const codechefData = {
          username: codechef.username,
          rating: data.currentRating,
          maxRating: data.highestRating,
          globalRank: data.globalRank,
          countryRank: data.countryRank,
          stars: data.stars ? data.stars.charAt(0) : 0,
          userAvatar: data.profile || "",
        };

        await User.findByIdAndUpdate(
          user._id,
          {
            $set: {
              "CodingProfiles.codechef": codechefData,
            },
          },
          { new: true, projection: { password: 0 } }
        );
      }

      if (codeforces.username) {
        const baseUrl1 = process.env.CODEFORCES_API_BASE_URL_FOR_USER_INFO;
        const apiUrl1 = `${baseUrl1}${codeforces.username}`;

        let response = await fetch(apiUrl1);

        let data = await response.json();

        const baseUrl2 = process.env.CODEFORCES_API_BASE_URL_FOR_USER_ACS;
        const apiUrl2 = `${baseUrl2}${codeforces.username}`;

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
          username: codeforces.username,
          rating: data.result[0].rating,
          rank: data.result[0].rank,
          maxRank: data.result[0].maxRank,
          maxRating: data.result[0].maxRating,
          questionSolved: solved.size || 0,
          userAvatar: data.result[0].titlePhoto || "",
        };

        await User.findByIdAndUpdate(
          user._id,
          {
            $set: {
              "CodingProfiles.codeforces": codeforcesData,
            },
          },
          { new: true, projection: { password: 0 } }
        );
      }

      console.log("Update user data --->", user.email);
    }

    console.log("Updation done");
  } catch (error) {
    console.log("Error updating user profiles:", error);
  }
};

export default automatedUserProfileUpdate;
