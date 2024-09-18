import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAnalyzeApi } from "../../api/getAnalyzeApi";

import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function AnalyzeListing() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnalyzeApi();
        if (response.status === 400) {
          navigate("/profile");
          return;
        } else if (response.status === 401) {
          navigate("/login");
          return;
        }

        setData(response.userData.CodingProfiles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const queryParams = new URLSearchParams(location.search);
    const shouldRefetch = queryParams.get("refetch");

    if (shouldRefetch === "true") {
      fetchData();

      navigate("/analyze");
    } else {
      fetchData();
    }
  }, [navigate, location.search]);

  const profiles = Object.keys(data).map((key) => ({
    platform: key,
    ...data[key],
  }));

  return (
    <div className="profile_container">
      {profiles.length > 0 ? (
        profiles.map((profile, index) => <Card key={index} profile={profile} />)
      ) : (
        <Loader />
      )}
    </div>
  );
}
