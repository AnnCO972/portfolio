import React from "react";
import ExperienceItem from "./ExperienceItem";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}
interface ExperienceProps {
  experiences: Experience[];
}
const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
