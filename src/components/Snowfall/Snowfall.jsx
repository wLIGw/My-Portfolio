import React, { useMemo } from "react";
import "./style.scss";
import snowflake from "../../assets/snowflake.svg";

const Snowfall = () => {
  const isMobile = window.innerWidth < 768;

  const flakes = useMemo(() => {
    const rand = (min, max) => min + Math.random() * (max - min);

    const COUNT = isMobile ? 22 : 36;

    return Array.from({ length: COUNT }).map((_, i) => ({
      id: i,

      left: rand(0, 100),

      startY: rand(-80, -20),

      size: isMobile ? rand(12, 20) : rand(14, 32),
      opacity: isMobile ? rand(0.45, 0.75) : rand(0.4, 0.9),

      duration: isMobile ? rand(26, 40) : rand(10, 20),

      
      delay: -rand(0, 40),

      drift: isMobile ? 0 : rand(-30, 30),
      rotate: isMobile ? 0 : rand(180, 720),
    }));
  }, [isMobile]);

  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((f) => (
        <img
          key={f.id}
          src={snowflake}
          alt=""
          className={`snowflake ${isMobile ? "snowflake--mobile" : ""}`}
          style={{
            left: `${f.left}vw`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,

            
            "--startY": `${f.startY}vh`,
            "--drift": `${f.drift}px`,
            "--rotate": `${f.rotate}deg`,

            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
