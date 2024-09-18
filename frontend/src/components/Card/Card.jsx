/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./card.css";
import gfg from "../../assests/gfg.jpg";
import codechef from "../../assests/codechef.jpg";
import leetcode from "../../assests/leetcode.png";
import codeforces from "../../assests/codeforces.jpeg";
import CardHelper from "./CardHelper";
export default function Card({ profile }) {
  if (!profile.username) return null;
  // console.log("----->", profile);
  // console.log("userAvatar--------", profile.userAvatar);
  // console.log(profile.platform);
  return (
    <div className="profile_container">
      <div className="profile-card">
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
            userAvater={profile.userAvatar}
            background={leetcode}
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
            userAvater={profile.userAvatar}
            background={gfg}
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
            userAvater={profile.userAvatar}
            background={codeforces}
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
            userAvater={profile.userAvatar}
            background={codechef}
          />
        )}
      </div>
    </div>
  );
}
