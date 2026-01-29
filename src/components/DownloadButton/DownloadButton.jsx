import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../Context/ThemeContext";

const DownloadButton = ({ className }) => {
  const { t } = useTranslation(); // подключаем i18next
  const { theme } = useContext(ThemeContext);

  const [tapActive, setTapActive] = useState(false);

  const handleTap = () => {
    setTapActive(true);
    setTimeout(() => setTapActive(false), 300);

    const link = document.createElement("a");
    link.href = "./CV/Martin_CV.pdf"; 
    link.download = "Martin_CV.pdf"; 
    link.click();
  };

  return (
    <button
      className={`${className} ${tapActive ? "tap-active" : ""}`}
      onClick={handleTap}
      onTouchStart={handleTap}
    >
      {t("downloadCV")}
    </button>
  );
};

export default DownloadButton;

