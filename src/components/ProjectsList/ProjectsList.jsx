import React from "react";
import projects from "../../data/projects.json";
import Card from "../Card/Card";
import './style.scss'


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

const ProjectsList = () => {


  const sortedProjects = [...projects].sort((a, b) => {
    const maxA = Math.max(...a.tech.map(t => techWeights[t] || 0));
    const maxB = Math.max(...b.tech.map(t => techWeights[t] || 0));
    return maxA - maxB;
  });

  return (
    <div className="projects__list">
      {sortedProjects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
