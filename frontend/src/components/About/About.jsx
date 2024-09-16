import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Contest started as a hobby project to gather all the contests happening around the internet in one place.
        </p>
        <p>
          But as time passed, I realized that it can be a great tool for people who are looking for contests to participate in.
        </p>
        <p>
          So, I started working on it more seriously and after (GOD knows how many) sleepless nights, here we are.
        </p>
        <p>
          Now I'll answer some of the questions you might have.
        </p>
      </section>

      <section className="about-section">
        <h1>Why Choose Us?</h1>
        <p>
          At our core, we are a dynamic team of full stack developers, comprising two highly skilled front-end specialists and two expert back-end engineers.
        </p>
        <p>
          Our front-end developers are adept at crafting intuitive and visually stunning user interfaces using cutting-edge technologies like React and Angular. Meanwhile, our back-end developers excel in building robust and scalable server-side solutions with Node.js and Python.
        </p>
        <p>
          This combination of front-end and back-end expertise allows us to deliver seamless, end-to-end web applications that are both functional and engaging.
        </p>
        <p>
          We are committed to understanding your unique requirements and providing tailored solutions that drive success and innovation for your business.
        </p>
      </section>
    </div>
  );
};

export default About;
