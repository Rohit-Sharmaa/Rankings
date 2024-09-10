import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import data from "./data";
import "./contributer.css";

export default function Contributer() {
  return (
    <section className="contributer_section">
      <div className="contributer_row">
        <h1>
          <span className="contributer_title">Our Team!</span>
        </h1>
      </div>
      <div className="contributer_row">
        {data.map((member) => (
          <div key={member.id} className="contributer_column">
            <div className="contributer_card">
              <div className="contributer_img-container">
                <img src={member.img} alt={member.Name} />
              </div>
              <h3>{member.Name}</h3>
              <p>{member.Role}</p>
              <div className="contributer_icons">
                <a href={member.LinkedIn}>
                  <FaLinkedin />
                </a>
                <a href={member.Github}>
                  <FaGithub />
                </a>
                <a href={`mailto:${member.mail}`}>
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
