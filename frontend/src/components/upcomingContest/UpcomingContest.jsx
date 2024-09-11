import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { BiCalendar } from "react-icons/bi";
import { TbCalendarPlus } from "react-icons/tb";
import { fetchUpcomingContests } from "../../api/fetchUpcomingContest.js";
import "./upcomingContest.css";

// Helper function to format duration
const formatDuration = (durationInSeconds) => {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  return hours > 0
    ? minutes > 0
      ? `${hours}h ${minutes}m`
      : `${hours}h`
    : `${minutes}m`;
};

// Helper function to format date to IST
const formatDateToIST = (dateString) => {
  const date = new Date(dateString);
  const options = {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("en-IN", options).format(date);
};

// UpcomingContest Component
export default function UpcomingContest() {
  const [contests, setContests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const loadContests = async () => {
      try {
        setLoading(true);
        const data = await fetchUpcomingContests();

        const transformedData = data.map((contest) => {
          return {
            ...contest,
            startTime: formatDateToIST(contest.start),
            duration: formatDuration(contest.duration),
          };
        });

        setContests(transformedData);
        setError(null);
      } catch (err) {
        setError("Failed to fetch contests");
        setContests([]);
      } finally {
        setLoading(false);
      }
    };

    loadContests();
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <div className="upcoming_contest_title">
        <h3>Upcoming Contest</h3>
        <p>
          We gathered everything in one place
          <span>, &nbsp;so you don't have to!</span>
        </p>
      </div>
      <table className="upcoming_contest_table">
        <thead className="upcoming_contest_thead">
          <tr>
            <th>Platform</th>
            <th>Title</th>
            <th>Starts</th>
            <th>Duration</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody className="table_body">
          {contests.map((entry, index) => (
            <tr key={index}>
              <td>
                <div className="upcoming_contest_item">
                  <img
                    src={entry.avatarUrl || "default-avatar-url.png"}
                    alt={entry.name}
                    className="upcoming_contest_avatar"
                  />
                  <div className="upcoming_contest_info">
                    <p className="upcoming_contest_fw-bold">{entry.host}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="upcoming_contest_fw-normal">{entry.event}</p>
              </td>
              <td className="upcoming_contest_start_duration">
                <span>
                  <BiCalendar />
                </span>
                &nbsp;
                <span className="upcoming_contest_fw-normal">
                  {entry.startTime}
                </span>
              </td>
              <td>
                <span className="upcoming_contest_duration_icon">
                  <IoMdTime />
                  <p>{entry.duration}</p>
                </span>
              </td>
              <td>
                <TbCalendarPlus />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
