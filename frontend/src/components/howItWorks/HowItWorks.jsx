import React from "react";
import data from "./data";
import "./howitworks.css";

export default function HowItWorks() {
  return (
    <section className="how_it_works">
      <h2 className="title">How it works</h2>
      <h4 className="title_desc">Here is step by step process</h4>

      <div className="project_card ">
        {data.map((item) => (
          <article className="card" key={item.id}>
            <div className="how_it_works_logo">
              <item.logo className="how_it_works_logo" size={30} />
            </div>
            <h4 className="how_it_works_title">{item.title}</h4>
            <p className="how_it_works_desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
