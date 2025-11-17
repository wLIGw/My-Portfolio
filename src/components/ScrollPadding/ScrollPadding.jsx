import { useEffect } from "react";

const ScrollPadding = () => {
  useEffect(() => {
    const header = document.getElementById("headerTop");

    const update = () => {
      if (!header) return;
      document.documentElement.style.setProperty(
        "--header-height",
        header.offsetHeight + "px"
      );
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return null;
};

export default ScrollPadding;
