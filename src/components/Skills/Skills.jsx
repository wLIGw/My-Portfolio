import React, { useContext } from "react";
import skillsData from "./../../data/skills.json";
import { useReveal } from "../../hooks/useReveal.js";
import { ThemeContext } from "../../Context/ThemeContext";
import "./style.scss";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="skills">
      {skillsData.map((skill, index) => {
        const ref = useReveal();

        
        const row = Math.floor(index / 3);
        const directionClass = row % 2 === 0 ? "reveal-left" : "reveal-right";

        
        const iconSrc = skill.iconLight && skill.iconDark
          ? theme === "light"
            ? skill.iconLight
            : skill.iconDark
          : skill.icon;

        return (
          <div
            key={index}
            ref={ref}
            className={`skill ${directionClass}`}
          >
            <div className="skill-header">
            <img
              src={import.meta.env.BASE_URL + skill.icon + iconSrc}
              alt={skill.name}
              className="skill-icon"
            />

              <span className="skill-name">{skill.name}</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            <span className="skill-level">{skill.level}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;


