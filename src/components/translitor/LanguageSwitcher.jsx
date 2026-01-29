import { useTranslation } from "react-i18next";
import "./style.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      {i18n.language === "en" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
