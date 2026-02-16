import { useTranslation } from "react-i18next";
import "./style.scss";

const LanguageSwitcher = () => {
  const { i18n, ready } = useTranslation();

  if (!ready) return null;

  const currentLang = i18n.resolvedLanguage;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ru" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      {currentLang === "en" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
