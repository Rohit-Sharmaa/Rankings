import React, { useState } from "react";
import "./profile.css";
import { data } from "./data";
import { addCodingProfileApi } from "../../api/addCodingProfileApi.js";

const Profile = () => {
  const [usernames, setUsernames] = useState({
    LeetCode: "",
    CodeChef: "",
    Codeforces: "",
    GeeksforGeeks: "",
  });

  const handleInputChange = (platform, value) => {
    setUsernames((prevUsernames) => ({
      ...prevUsernames,

      [platform]: value,
    }));
  };

  const handleAddClick = (platform) => {
    const username = usernames[platform];
    if (!username.trim()) {
      alert(`Please enter your ${platform} username`);
      return;
    }

    if (platform === "LeetCode") {
      console.log(usernames);
      console.log(username);
      addCodingProfileApi.addLeetcodeProfile(username);
    } else if (platform === "CodeChef") {
      addCodingProfileApi.addCodechefProfile(username);
    } else if (platform === "Codeforces") {
      addCodingProfileApi.addCodeforcesProfile(username);
    } else if (platform === "GeeksforGeeks") {
      addCodingProfileApi.addGeeksforGeeksProfile(username); // Corrected here
    } else {
      alert("Platform not supported");
      return;
    }
  };

  return (
    <div className="profile-container">
      <div className="add-your-profile">
        <h3>Add Your Profile</h3>
        <p>
          To highlight your achievements <span>and showcase your skills</span>
        </p>
      </div>
      <div className="profile-table">
        <table>
          <tbody>
            {data.map((profile, index) => (
              <tr key={index}>
                <td>
                  <div className="profile-item">
                    <div className="profile-icon-container">
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={profile.icon}
                          alt={profile.platform}
                          className="profile-icon"
                        />
                      </a>
                    </div>
                    <span>{profile.platform}</span>
                  </div>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={` ${profile.platform} username`}
                    onChange={(e) =>
                      handleInputChange(profile.platform, e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    className="add-button btn primary"
                    onClick={() => handleAddClick(profile.platform)}
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
