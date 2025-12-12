import React, { useContext, useState, useRef, useEffect } from "react";
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

  // ===== Learn more / Modal =====
  const descRef = useRef(null);
  const modalRef = useRef(null);

  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Проверяем, обрезан ли текст в карточке
  useEffect(() => {
    if (descRef.current) {
      setShowMore(
        descRef.current.scrollHeight > descRef.current.clientHeight
      );
    }
  }, []);

  // 👉 ВСЕГДА открывать модалку с начала
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isModalOpen]);

  if (!project) return null;

  return (
    <>
      <div
        ref={ref}
        className={`${styles.card} reveal`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        <h3 className={styles.cardTitle}>{project.title}</h3>

        <img
          src={import.meta.env.BASE_URL + project.img}
          alt={project.title}
          className={styles.cardImg}
        />

        <div className={styles.cardContent}>
          {(project.real || project.tech?.length > 0) && (
            <div className={styles.techWrapper}>
              {project.real && (
                <TechTag name="REAL PROJECT" type="real" />
              )}

              {project.tech?.map((t, i) => (
                <TechTag key={i} name={t} />
              ))}
            </div>
          )}

          {/* Описание с ограничением */}
          <p ref={descRef} className={styles.cardDesc}>
            {project.desc}
          </p>

          {showMore && (
            <button
              className={styles.learnMore}
              onClick={() => setIsModalOpen(true)}
            >
              Learn more
            </button>
          )}
        </div>

        <div className={styles.buttonWrapper}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <img
                className={styles.img}
                src={gitHubIcon}
                alt="GitHub"
              />
            </a>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewButton}
          >
            <img
              className={styles.img}
              src={linkIcon}
              alt="Open project"
            />
          </a>
        </div>
      </div>

      {/* ===== MODAL WINDOW ===== */}
      <div
        className={`${styles.modalOverlay} ${
          isModalOpen ? styles.open : ""
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          ref={modalRef}
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className={styles.modalTitle}>{project.title}</h3>

          <div className={styles.modalTags}>
            {project.real && (
              <TechTag name="REAL PROJECT" type="real" />
            )}
            {project.tech?.map((t, i) => (
              <TechTag key={i} name={t} />
            ))}
          </div>

          <p className={styles.modalDesc}>
            {project.desc.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <button
            className={styles.closeBtn}
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

