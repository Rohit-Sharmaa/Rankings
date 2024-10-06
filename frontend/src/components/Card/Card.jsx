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
            val1={profile.questionSolved}
            val1name="Solved"
            val2={profile.rating}
            val2name="Rating"
            val3={profile.globalRanking}
            val3name="Ranking"
            username={profile.username}
            platform={profile.platform}
            val4={profile.EasySolved}
            val4name="Easy"
            val5={profile.MediumSolved}
            val5name="Medium"
            val6={profile.HardSolved}
            val6name="Hard"
            userAvater={profile.userAvatar}
            background={leetcode}
            // attendedContest={profile.attendedContest}
            // streak={profile.streak}
            // totalActiveDays={profile.totalActiveDays}
          />
        )}

        {profile.platform === "gfg" && (
          <CardHelper
            val1={profile.questionSolved}
            val1name="solved"
            val2={profile.codingScore}
            val2name="Score"
            val3={profile.instituteRank}
            val3name="Rank"
            val4={profile.EasySolved}
            val4name="Easy"
            val5={profile.MediumSolved}
            val5name="Medium"
            val6={profile.HardSolved}
            val6name="Hard"
            username={profile.username}
            platform={profile.platform}
            userAvater={profile.userAvatar}
            background={gfg}
          />
        )}

        {profile.platform === "codeforces" && (
          <CardHelper
            val1={profile.questionSolved}
            val1name="Solved"
            val2={profile.rating}
            val2name="Rating"
            val3={profile.rank}
            val3name="Rank"
            val4={profile.rating}
            val4name="Rating"
            val5={profile.maxRating}
            val5name="maxRating"
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
            val4={profile.rating}
            val4name="Rating"
            val5={profile.maxRating}
            val5name="maxRating"
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
