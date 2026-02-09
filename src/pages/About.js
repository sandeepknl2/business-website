import React from "react";
import TeamMember from "../components/TeamMember";

const About = () => {
  return (
    <div className="grid">
      <TeamMember name="CEO"/>
      <TeamMember name="Developer"/>
    </div>
  );
};

export default About;