import React, { useContext } from "react";
import './style.scss';
import data from "../../data/Introdactions.json";
import { ThemeContext } from "../../Context/ThemeContext";

const Introdactions = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`about-right ${theme === "light" ? "light-icons" : ""}`}>
      {data.map((item, index) => (
        <div key={index} className="about-card">
          <img
            src={theme === "light" ? item.iconLight : item.iconDark}
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

