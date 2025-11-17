import SubTitle from '../SubTitle/SubTitle';
import { useReveal } from '../../hooks/useReveal.js';
import './style.scss'
import Introdactions from '../Introductions/Introdactions.jsx';

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const AboutMe = () => {

    const leftRef = useReveal();
    const rightRef = useReveal();

    const { theme } = useContext(ThemeContext);

    return (
        <section className="about__me">
            <div className="container">
                <SubTitle text="About Me" />

                <div className="about__me-wrapper">

                    <div 
                        ref={leftRef} 
                        className={`about__me-left reveal-left ${theme === "light" ? "light-text" : ""}`}
                    >
                        <h3 className="me__left-title">
                            Passionate Frontend Developer & Tech Enthusiast
                        </h3>

                        <p className="me__left-desc">
                            I am a frontend developer who focuses on building clean, structured, and responsive interfaces using modern tools like React, Sass, Tailwind, and JavaScript. I enjoy creating layouts that feel intuitive and visually consistent, paying close attention to performance, accessibility, and code quality. With experience working across Linux environments, version control, and UI optimization, I approach each project with the mindset of solving real problems through thoughtful design and reliable engineering. Always learning and exploring new technologies, I aim to grow as a specialist who can turn ideas into stable and engaging digital experiences.
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

