// contestFetcher.js

const getFormattedDateRangeInIST = () => {
  const startDate = new Date();
  const offset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
  startDate.setTime(startDate.getTime() + offset); // Convert UTC to IST
  startDate.setUTCHours(0, 0, 0, 0); // Midnight IST

  // Set the end date to 15 days later
  const endDate = new Date(startDate);
  endDate.setUTCDate(startDate.getUTCDate() + 30); // 15 days later
  endDate.setUTCHours(0, 0, 0, 0); // Midnight of the next day in UTC
  endDate.setTime(endDate.getTime() - offset); // Convert back to IST

  return {
    start: startDate.toISOString().slice(0, 19),
    end: endDate.toISOString().slice(0, 19),
  };
};

export const getUpcomingContests = async () => {
  const { start, end } = getFormattedDateRangeInIST();

  const url = `${process.env.UPCOMING_CONTEST_API}${start}&end__lt=${end}&orderby=start&limit=100&format=json`;

  console.log(url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `ApiKey ${process.env.API_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching contests:", error.message);
    return false;
  }
};

// Example usage
// (Uncomment the following lines to test the function)
// (async () => {
//   const contests = await getUpcomingContests();
//   console.log(contests);
// })();
