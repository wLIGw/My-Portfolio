import { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../Logo/Logo";
import ThemeToggle from "../Theme/ThemeSwitch";
import HeaderNav from "../HeaderNav/HeaderNav";
import MobileNav from "../MobileNav/MobileNav";
import DownloadButton from "../DownloadButton/DownloadButton";
import LanguageSwitcher from "../translitor/LanguageSwitcher";

import { ThemeContext } from "../../Context/ThemeContext";
import "./style.scss";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${isHome ? "header--home" : "header--small"}`}>
      {/* ===== TOP BAR ===== */}
      <div className="header__top">
        <div className="container header__top-container">
          <Logo />

          {/* Навигация (скрыта на мобильных) */}
          <HeaderNav className="desktop-nav" />

          {/* Правый блок */}
          <div className="header__top-right">
            <LanguageSwitcher />
            <ThemeToggle />
            <div
              className={`burger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE NAV ===== */}
      <MobileNav isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />

      {/* ===== HERO ===== */}
      {isHome && (
        <div className="container header__main">
          <h1 className="me">
            {t("hero.title")} <span className="me__span">{t("hero.name")}</span>
          </h1>
          <p className="me__desc">{t("hero.subtitle")}</p>

          <DownloadButton
            className={`download ${theme === "light" ? "download--light" : ""}`}
          />
        </div>
      )}
    </header>
  );
};

export default Header;

