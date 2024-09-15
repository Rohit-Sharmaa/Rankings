import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAnalyzeApi } from "../../api/getAnalyzeApi";
import { useNavigate } from "react-router-dom";
export default function AnalyzeListing() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnalyzeApi();
        if (response.status === 400) {
          navigate("/profile");
          return;
        }

        setData(response.updatedUser.CodingProfiles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  const profiles = Object.keys(data).map((key) => ({
    platform: key,
    ...data[key],
  }));

  return (
    <div className="profile_container">
      {profiles.length > 0 ? (
        profiles.map((profile, index) => <Card key={index} profile={profile} />)
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
}
