import React, { useMemo } from "react";
import "./style.scss";
import snowflake from "../../assets/snowflake.svg";

const Snowfall = () => {
  const flakes = useMemo(() => {
    const rand = (min, max) => min + Math.random() * (max - min);

    const COUNT = window.innerWidth < 768 ? 20 : 45;

    return Array.from({ length: COUNT }).map((_, i) => ({
      id: i,
      left: rand(0, 100),
      size: rand(12, 32),
      duration: rand(8, 18),
      delay: rand(0, 10),
      drift: rand(-30, 30),
      rotate: rand(180, 720),
      opacity: rand(0.4, 0.9),
    }));
  }, []);

  return (
    <div className="snowfall">
      {flakes.map((f) => (
        <img
          key={f.id}
          src={snowflake}
          alt=""
          className="snowflake"
          style={{
            left: `${f.left}vw`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            "--drift": `${f.drift}px`,
            "--rotate": `${f.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
