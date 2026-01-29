import { useTranslation } from "react-i18next";
import Link from "../Link/Link";
import "./style.scss";

const HeaderNav = ({ isOpen, closeMenu }) => {
  const { t } = useTranslation();

  return (
    <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
      <ul className="nav__list">
        <li>
          <Link text={t("nav.home")} to="/" onClick={closeMenu} />
        </li>
        <li>
          <Link text={t("nav.about")} to="/about" onClick={closeMenu} />
        </li>
        <li>
          <Link text={t("nav.skills")} to="/skills" onClick={closeMenu} />
        </li>
        <li>
          <Link text={t("nav.projects")} to="/projects" onClick={closeMenu} />
        </li>
        <li>
          <Link text={t("nav.contacts")} to="/contacts" onClick={closeMenu} />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
