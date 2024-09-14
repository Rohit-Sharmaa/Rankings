import "./analyze.css";
import AnalyzeListing from "./AnalyzeListing";

export default function Analyze() {
  return (
    <section className="analyze_container">
      <h3>Analyze Your Coding Profile</h3>
      <p className="analyze_base_line">
        See your coding stats and fuel your passion for growth.
      </p>

      <AnalyzeListing />
    </section>
  );
}
