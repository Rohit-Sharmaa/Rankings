import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          At our core, we simplify the process of tracking and comparing your
          coding performance across multiple platforms. Whether it’s Codeforces,
          LeetCode, or others, we bring your rankings together in one place.
        </p>
        <p>
          Our mission is to empower developers by providing real-time insights
          into their competitive coding journey, enabling you to monitor your
          growth and stay ahead of the competition.
        </p>
        <p>
          We take the time to understand each user's needs and deliver
          customized solutions to enhance their experience.
        </p>
        <p>
          Backed by a talented team of full-stack developers, we combine the
          strengths of our front-end,back-end and full-stack specialists to
          create seamless, responsive, and powerful applications tailored just
          for you.
        </p>
      </section>

      <section className="about-section">
        <h1>
          <span>Why Choose Us ?</span>
        </h1>
        <p>The ultimate hub for coders seeking challenges!</p>
        <p>
          We aggregate top coding contests from around the globe, making it
          easier for you to find and participate in competitive programming
          events.
        </p>
        <p>
          We also offer profile synchronization from multiple coding platforms,
          allowing you to easily compare your coding stats and track your
          progress across different platforms.
        </p>
        <p>
          Driven by passion and a commitment to excellence, we dedicated
          ourselves to this vision. After countless hours of hard work and
          perseverance, we’ve brought it to life, and we're just getting
          started.
        </p>
        <p>Join us and make your coding journey exciting and rewarding!</p>
      </section>
    </div>
  );
};

export default About;
