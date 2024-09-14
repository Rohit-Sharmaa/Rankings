import React from "react";
import "./card.css";
import { FaStar } from "react-icons/fa";

export default function CardHelper({
  val1,
  val1name,
  val2,
  val2name,
  val3,
  val3name,
  username,
  platform,
  questionSolved,
  rating,
  globalRanking,
  attendedContest,
  streak,
  totalActiveDays,
  maxRank,
}) {
  console.log(val1, " ", username, platform);
  return (
    <>
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
              {val2}{" "}
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
      <div>
        {platform === "leetcode" && (
          <>
            <div className="profile-card-actions">
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
            </div>

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
            <div className="profile-card-actions">
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
            </div>
          </>
        )}

        {platform === "codeforces" && (
          <>
            <div className="profile-card-actions">
              <div>TotalSolved</div>
              <div>{questionSolved}</div>
            </div>

            <div className="profile-card-actions">
              <div>Rating</div>
              <div>{rating}</div>
            </div>
            <div className="profile-card-actions">
              <div>maxRank</div>
              <div>{maxRank}</div>
            </div>
          </>
        )}

        {platform === "codechef" && (
          <>
            <div className="profile-card-actions">
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
            </div>
          </>
        )}
      </div>
    </>
  );
}
