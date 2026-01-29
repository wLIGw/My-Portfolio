import SubTitle from '../SubTitle/SubTitle';
import { useReveal } from '../../hooks/useReveal.js';
import './style.scss';
import Introdactions from '../Introductions/Introdactions.jsx';

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation();

    const leftRef = useReveal();
    const rightRef = useReveal();

    const { theme } = useContext(ThemeContext);

    return (
        <section className="about__me">
            <div className="container">
                <SubTitle text={t("about.subtitle")} />

                <div className="about__me-wrapper">
                    <div 
                        ref={leftRef} 
                        className={`about__me-left reveal-left ${theme === "light" ? "light-text" : ""}`}
                    >
                        <h3 className="me__left-title">
                            {t("about.title")}
                        </h3>

                        <p className="me__left-desc">
                            {t("about.desc")}
                        </p>
                    </div>

                    <div ref={rightRef} className="about__me-right reveal-right">
                        <Introdactions />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
