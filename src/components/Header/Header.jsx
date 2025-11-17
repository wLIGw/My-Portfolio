import Logo from "../Logo/Logo";
import ThemeToggle from "../Theme/ThemeSwitch";
import HeaderNav from "../HeaderNav/HeaderNav";
import MobileNav from "../MobileNav/MobileNav";

import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

import "./style.scss";
import DownloadButton from "../DownloadButton/DownloadButton";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${isHome ? "header--home" : "header--small"}`}>

      
      <div className="header__top">
        <div className="container header__top-container">

          
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Logo />

          
          <HeaderNav />

          <ThemeToggle />
        </div>
      </div>

      
      <MobileNav isOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />

      {isHome && (
        <div className="container header__main">
          <h1 className="me">
            Hi, my name is <span className="me__span">Martin</span>
          </h1>

          <p className="me__desc">a frontend developer</p>

          <DownloadButton  className={`download ${theme === "light" ? "download--light" : ""}`} />
        </div>
      )}

    </header>
  );
};

export default Header;
