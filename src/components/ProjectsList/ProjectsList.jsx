import React from "react";
import projects from "../../data/projects.json";
import Card from "../Card/Card";
import './style.scss';

const techWeights = {
  "HTML": 1,
  "CSS": 2,
  "SCSS": 2,
  "JS": 3,
  "GULP": 4,
  "REACT": 5,
  "VITE": 6,
  "NODE JS": 7
};

const REAL_PROJECT_BONUS = 1000; // << главное значение

const ProjectsList = () => {

  const sortedProjects = [...projects].sort((a, b) => {
    const techScoreA = Math.max(...(a.tech || []).map(t => techWeights[t] || 0));
    const techScoreB = Math.max(...(b.tech || []).map(t => techWeights[t] || 0));

    const realBonusA = a.real ? REAL_PROJECT_BONUS : 0;
    const realBonusB = b.real ? REAL_PROJECT_BONUS : 0;

    return (techScoreB + realBonusB) - (techScoreA + realBonusA);
  });

  return (
    <div className="projects__list">
      {sortedProjects.map((project, index) => (
        <Card key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsList;

