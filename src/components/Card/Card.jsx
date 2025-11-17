import React, { useContext } from "react";
import TechTag from "../TechTag/TechTag";
import GitHubWhite from "./github-white-icon.svg";
import GitHubBlack from "./github-icon.svg";
import LinkWhite from "./external-link-icon.svg";
import LinkBlack from "./external-link-black copy.svg";
import styles from "./style.module.scss";
import { useReveal } from "../../hooks/useReveal.js";
import { ThemeContext } from "../../Context/ThemeContext.jsx";

const Card = ({ project, index }) => {
  const ref = useReveal();
  const { theme } = useContext(ThemeContext);

  const linkIcon = theme === "dark" ? LinkWhite : LinkBlack;
  const gitHubIcon = theme === "dark" ? GitHubWhite : GitHubBlack;

  if (!project) return null;

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <img src={project.img} alt={project.title} className={styles.cardImg} />

      
      <div className={styles.cardContent}>
        {project.tech && project.tech.length > 0 && (
          <div className={styles.techWrapper}>
            {project.tech.map((t, i) => (
              <TechTag key={i} name={t} />
            ))}
          </div>
        )}
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>

      
      </div>

      
      <div className={styles.buttonWrapper}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            <img className={styles.img} src={gitHubIcon} alt="GitHub" />
          </a>
        )}

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewButton}
        >
          <img className={styles.img} src={linkIcon} alt="Open project" />
        </a>
      </div>
    </div>
  );
};

export default Card;



