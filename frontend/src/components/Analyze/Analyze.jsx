import { refreshUserDataApi } from "../../api/refreshUserDataApi.js";
import "./analyze.css";
import AnalyzeListing from "./AnalyzeListing";
import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const navigate = useNavigate();
  const handleRefreshDataClick = async () => {
    try {
      await refreshUserDataApi();
      navigate("/analyze?refetch=true");
    } catch (error) {
      navigate("/analyze?refetch=true");
    }
  };

  return (
    <section className="analyze_container">
      <h3>Analyze Your Coding Profile</h3>
      <p className="analyze_base_line">
        See your coding stats and fuel your passion for growth.
      </p>

      <AnalyzeListing />

      <p className="analyze_note">
        If you find that your data is not reflecting recent changes or appears
        incorrect, you can manually refresh your profile by{" "}
        <li className="refresh_profile" onClick={handleRefreshDataClick}>
          clicking here
        </li>
      </p>
    </section>
  );
}
