import React, { useMemo } from "react";
import "./style.scss";
import snowflake from "../../assets/snowflake.svg";

const Snowfall = () => {
  const isMobile = window.innerWidth < 768;
  const isLowEnd =
    typeof navigator !== "undefined" &&
    navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency <= 4;

  // ❌ полностью отключаем снег на слабых мобильных устройствах
  if (isMobile && isLowEnd) return null;

  const flakes = useMemo(() => {
    const rand = (min, max) => min + Math.random() * (max - min);

    // 🎯 оптимальное количество
    const COUNT = isMobile ? 14 : 35;

    return Array.from({ length: COUNT }).map((_, i) => {
      const size = isMobile ? rand(8, 14) : rand(14, 32);

      return {
        id: i,

        // ❄️ позиция
        left: rand(0, 100),
        startY: isMobile ? rand(-30, 100) : rand(-40, -10),

        // ❄️ размеры и скорость
        size,
        duration: isMobile ? rand(22, 34) : rand(8, 18),
        delay: rand(0, 10),

        // ❄️ движение
        drift: isMobile ? 0 : rand(-30, 30),
        rotate: isMobile ? 0 : rand(180, 720),

        // ❄️ прозрачность
        opacity: rand(0.4, 0.9),
      };
    });
  }, [isMobile]);

  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((f) => (
        <img
          key={f.id}
          src={snowflake}
          alt=""
          className="snowflake"
          style={{
            left: `${f.left}vw`,
            top: `${f.startY}vh`,
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
