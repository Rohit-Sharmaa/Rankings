import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { getAnalyzeApi } from "../../api/getAnalyzeApi";
import { useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../../redux/loader/loader";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader/loader";
export default function AnalyzeListing() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(showLoading());
        const response = await getAnalyzeApi();
        if (response.status === 400) {
          navigate("/profile");
          return;
        }
        dispatch(hideLoading());
        setData(response.updatedUser.CodingProfiles);
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(hideLoading());
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
        <Loader />
      )}
    </div>
  );
}
