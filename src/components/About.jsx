import React from "react";
import Globe from "../assets/globe.webp";
import AddPeople from "./AddPeople";

const About = () => {
  return (
    <div className="about">
      <div className="about__text" >
      </div>
      <div className="about__image" >
        <img className="image" src={Globe} alt="globe-icon" loading={"lazy"} />
      </div>
    </div>
  );
};

export default About;
