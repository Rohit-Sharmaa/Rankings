import React from "react";
import "./header.css";
import Coursel from "../../utils/Coursel";

export default function Header() {
  return (
    <div className="top_container">
      <div className="header_container">
        <div className="wrapper">
          <h1 className="tagline_container">
            <span className="tagline_heading"> All Your Coding Profiles</span>
            &nbsp; <span className="tagline_inner">in One Place</span>
          </h1>
          <h3 className="base_line_container">
            <span className="base_line_upper">
              <span className="base_line_name">Rankings</span> brings together
              all your coding profiles into one unified view.
            </span>

            <span className="base_line_lower">
              Easily track your performance, compare, and see your progress over
              time.
            </span>
          </h3>
        </div>
      </div>

      <div className="cta_button">
        <button className="btn primary sm">Let's Start</button>
        <button className="btn light"> Analyze</button>
      </div>

      <div className="coursel">
        <Coursel />
      </div>
    </div>
  );
}
