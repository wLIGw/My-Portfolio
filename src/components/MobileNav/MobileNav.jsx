import Link from "../Link/Link";
import { useTranslation } from "react-i18next";
import "./style.scss";

const MobileNav = ({ isOpen, closeMenu }) => {
  const { t } = useTranslation();

  return (
    <div className={`mobileNav ${isOpen ? "open" : ""}`}>
      <div className="mobileNav__panel">
        <div className="mobileNav__close" onClick={closeMenu}>✕</div>

        <ul className="mobileNav__list">
          <li><Link text={t("mobileNav.home")} to="/" onClick={closeMenu} /></li>
          <li><Link text={t("mobileNav.about")} to="/about" onClick={closeMenu} /></li>
          <li><Link text={t("mobileNav.skills")} to="/skills" onClick={closeMenu} /></li>
          <li><Link text={t("mobileNav.projects")} to="/projects" onClick={closeMenu} /></li>
          <li><Link text={t("mobileNav.contacts")} to="/contacts" onClick={closeMenu} /></li>
        </ul>
      </div>

      <div className="mobileNav__overlay" onClick={closeMenu}></div>
    </div>
  );
};

export default MobileNav;

