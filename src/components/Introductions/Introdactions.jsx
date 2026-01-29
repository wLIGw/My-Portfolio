import React, { useContext } from "react";
import "./style.scss";
import enData from "../../data/en/Introdactions.json";
import ruData from "../../data/ru/Introdactions.json";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const Introdactions = () => {
  const { theme } = useContext(ThemeContext);
  const { i18n } = useTranslation();

  const data = i18n.language.startsWith("ru") ? ruData : enData;

  return (
    <div className={`about-right ${theme === "light" ? "light-icons" : ""}`}>
      {data.map((item, index) => (
        <div key={index} className="about-card">
          <img
            src={
              import.meta.env.BASE_URL +
              (theme === "light" ? item.iconLight : item.iconDark)
            }
            alt={item.title}
            className="about-card__icon"
          />
          <div className="about-card__content">
            <h3 className="about-card__title">{item.title}</h3>
            <p className="about-card__desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Introdactions;

