import React from "react";
import "./card.css";
import { FaStar } from "react-icons/fa";

import dummylogo from "../../assests/dummy.jpg";
import PieChart from "../Charts/PieChart";
export default function CardHelper({
  val1,
  val1name,
  val2,
  val2name,
  val3,
  val3name,

  val4,
  val4name,
  val5,
  val5name,
  val6,
  val6name,

  username,
  platform,
  questionSolved,
  rating,
  globalRanking,
  attendedContest,
  streak,
  totalActiveDays,
  maxRank,
  userAvater,
  background,
}) {
  //console.log(val1, " ", username, platform, userAvater);
  return (
    <>
      <div className="analyze_container_upper">
        <div>
          <div className="profile-card-header">
            {/* <img
              src={background}
              alt="Profile Banner"
              className="profile-card-banner"
            /> */}
            <img
              src={userAvater || dummylogo}
              alt="Profile"
              className="profile-card-avatar"
            />
          </div>
          <div className="profile-card-body">
            <h2 className="profile-card-name">{username}</h2>
            <p className="profile-card-title">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </p>
            <div className="profile-card-stats">
              <div className="profile-card-stat">
                <p className="profile-card-stat-number">{val1}</p>
                <p className="profile-card-stat-label">{val1name}</p>
              </div>
              <div className="profile-card-stat">
                <p className="profile-card-stat-number">
                  {val2}
                  {platform === "codechef" && (
                    <FaStar style={{ height: "16px", width: "16px" }} />
                  )}
                </p>
                <p className="profile-card-stat-label">{val2name}</p>
              </div>
              <div className="profile-card-stat">
                <p className="profile-card-stat-number">{val3}</p>
                <p className="profile-card-stat-label">{val3name}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {platform === "leetcode" && (
            <>
              <PieChart
                val4={val4}
                val4name={val4name}
                val5={val5}
                val5name={val5name}
                val6={val6}
                val6name={val6name}
                platform={platform}
              />

              {/* <div className="profile-card-actions">
              <div>{val4name}</div>
              <div>{val4}</div>
            </div>

            <div className="profile-card-actions">
              <div>{val5name}</div>
              <div>{val5}</div>
            </div>
            <div className="profile-card-actions">
              <div>{val6name}</div>
              <div>{val6}</div>
            </div> */}

              {/* <div className="profile-card-actions">
              <div>AttendedContest</div>
              <div>{attendedContest}</div>
            </div>

            <div className="profile-card-actions">
              <div>Streak</div>
              <div>{streak}</div>
            </div>

            <div className="profile-card-actions">
              <div>totalActiveDays</div>
              <div>{totalActiveDays}</div>
            </div> */}
            </>
          )}

          {platform === "gfg" && (
            <>
              <PieChart
                val4={val4}
                val4name={val4name}
                val5={val5}
                val5name={val5name}
                val6={val6}
                val6name={val6name}
                platform={platform}
              />
              {/* <div className="profile-card-actions">
                <div>TotalSolved</div>
                <div>{questionSolved}</div>
              </div>

              <div className="profile-card-actions">
                <div>Rating</div>
                <div>{rating}</div>
              </div>
              <div className="profile-card-actions">
                <div>GlobalRanking</div>
                <div>{globalRanking}</div>
              </div> */}
            </>
          )}

          {platform === "codeforces" && (
            <>
              <PieChart
                val4={val4}
                val4name={val4name}
                val5={val5}
                val5name={val5name}
                platform={platform}
              />
            </>
          )}

          {platform === "codechef" && (
            <>
              <PieChart
                val4={val4}
                val4name={val4name}
                val5={val5}
                val5name={val5name}
                platform={platform}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
