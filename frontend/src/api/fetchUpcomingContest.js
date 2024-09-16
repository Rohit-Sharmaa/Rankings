// eslint-disable-next-line
import apiClient from "../config/axiosConfig.js";

export const fetchUpcomingContests = async (
  dispatch,
  showLoading,
  hideLoading
) => {
  try {
    console.log(process.env.REACT_APP_API_BASE_URL);
    dispatch(showLoading());
    const response = await apiClient.get(`/api/contest/upcoming`);

    if (response.status !== 200) {
      alert("Something went wrong");
      return;
    }
    dispatch(hideLoading());

    const contestData = response.data.contestData;
    const validHosts = [
      "toph.co",
      "hackerearth.com",
      "atcoder.jp",
      "leetcode.com",
      "codingninjas.com/codestudio",
      "codechef.com",
      "codeforces.com",
    ];

    const adjustedContestData = contestData.objects
      .filter((contest) => validHosts.includes(contest.host)) // Filter by valid hosts
      .map((contest) => {
        const startDate = new Date(contest.start);
        startDate.setHours(startDate.getHours() + 5);
        startDate.setMinutes(startDate.getMinutes() + 30);
        return {
          ...contest,
          start: startDate.toISOString(),
        };
      });

    // Sort contests based on the adjusted start date and time
    adjustedContestData.sort((a, b) => new Date(a.start) - new Date(b.start));

    const adjustedResponse = {
      ...response.data,
      contestData: {
        ...contestData,
        objects: adjustedContestData,
      },
    };
    console.log(adjustedResponse);
    return adjustedResponse.contestData.objects;
  } catch (error) {
    console.error("Error fetching upcoming contests:", error);
    dispatch(hideLoading());
    throw error;
  }
};
