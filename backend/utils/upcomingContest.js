import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const getFormattedDate = () => {
  const date = new Date();
  return date.toISOString().slice(0, 19);
};

export const getUpcomingContests = async () => {
  const formattedDate = getFormattedDate();
  const url = `${process.env.UPCOMING_CONTEST_API}${formattedDate}&limit=100&format=json`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("cpontest data --->", data);
    return data;
  } catch (error) {
    console.error("Error fetching contests:", error);
    return false;
  }
};
