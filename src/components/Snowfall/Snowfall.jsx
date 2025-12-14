import React, { useMemo } from "react";
import "./style.scss";
import snowflake from "../../assets/snowflake.svg";

const Snowfall = () => {
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency <= 4;

  // ❌ полностью отключаем снег на слабых мобилках
  if (isMobile && isLowEnd) return null;

  const flakes = useMemo(() => {
    const rand = (min, max) => min + Math.random() * (max - min);

    // 🔥 ЖЁСТКО меньше элементов на мобилке
    const COUNT = isMobile ? 8 : 35;

    return Array.from({ length: COUNT }).map((_, i) => ({
      id: i,
      left: rand(0, 100),
      size: isMobile ? rand(10, 18) : rand(14, 32),
      duration: isMobile ? rand(14, 24) : rand(8, 18),
      delay: rand(0, 10),

      // ❌ убираем горизонтальный drift и вращение на мобилке
      drift: isMobile ? 0 : rand(-30, 30),
      rotate: isMobile ? 0 : rand(180, 720),

      opacity: rand(0.4, 0.9),
    }));
  }, [isMobile]);

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
