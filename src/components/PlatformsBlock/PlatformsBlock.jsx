import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";
import styles from "./style.module.scss";

import ruPlatforms from "../../data/ru/platforms_ru.json";
import enPlatforms from "../../data/en/platforms_en.json";

const PlatformsBlock = () => {
  const { i18n } = useTranslation();
  const containerRef = useReveal();

  const platforms =
    i18n.language === "en" ? enPlatforms : ruPlatforms;

  return (
    <div
      ref={containerRef}
      className={`${styles.wrapper} reveal-up`}
    >
      {platforms.map((platform, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ "--delay": `${index * 0.15}s` }}
        >
          <div className={styles.left}>
            <img src={platform.logo} alt={platform.name} />
          </div>

          <div className={styles.center}>
            <p>{platform.text}</p>
          </div>

          <div className={styles.right}>
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              {platform.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformsBlock;