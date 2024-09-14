/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./card.css";
import background from "../../assests/download.jpeg";
import CardHelper from "./CardHelper";

export default function Card({ profile }) {
  if (!profile.username) return null;
  console.log(profile);
  console.log(profile.platform);
  return (
    <div className="profile_container">
      <div className="profile-card">
        <div className="profile-card-header">
          <img
            src={background}
            alt="Profile Banner"
            className="profile-card-banner"
          />
          <img
            src={background}
            alt="Profile Picture"
            className="profile-card-avatar"
          />
        </div>
        {profile.platform === "leetcode" && (
          <CardHelper
            val1={profile.EasySolved}
            val1name="Easy"
            val2={profile.MediumSolved}
            val2name="Medium"
            val3={profile.HardSolved}
            val3name="Hard"
            username={profile.username}
            platform={profile.platform}
            questionSolved={profile.questionSolved}
            rating={profile.rating}
            globalRanking={profile.globalRanking}
            // attendedContest={profile.attendedContest}
            // streak={profile.streak}
            // totalActiveDays={profile.totalActiveDays}
          />
        )}

        {profile.platform === "gfg" && (
          <CardHelper
            val1={profile.EasySolved}
            val1name="Easy"
            val2={profile.MediumSolved}
            val2name="Medium"
            val3={profile.HardSolved}
            val3name="Hard"
            username={profile.username}
            platform={profile.platform}
            questionSolved={profile.questionSolved}
            rating={profile.codingScore}
            globalRanking={profile.instituteRank}
          />
        )}

        {profile.platform === "codeforces" && (
          <CardHelper
            val1={profile.rating}
            val1name="Rating"
            val2={profile.rank}
            val2name="Rank"
            val3={profile.maxRating}
            val3name="maxRating"
            username={profile.username}
            platform={profile.platform}
            questionSolved={profile.questionSolved}
            rating={profile.rating}
            maxRank={profile.maxRank}
          />
        )}

        {profile.platform === "codechef" && (
          <CardHelper
            val1={profile.rating}
            val1name="Rating"
            val2={profile.stars}
            val2name="Stars"
            val3={profile.maxRating}
            val3name="maxRating"
            username={profile.username}
            platform={profile.platform}
            questionSolved={profile.questionSolved}
            rating={profile.rating}
            globalRanking={profile.globalRank}
          />
        )}
      </div>
    </div>
  );
}
