import Link from "../Link/Link";
import "./style.scss";

const MobileNav = ({ isOpen, closeMenu }) => {
  return (
    <div className={`mobileNav ${isOpen ? "open" : ""}`}>
      
      
      <div className="mobileNav__panel">
        <div className="mobileNav__close" onClick={closeMenu}>✕</div>

        <ul className="mobileNav__list">
          <li><Link text="Home" to="/" onClick={closeMenu} /></li>
          <li><Link text="About me" to="/about" onClick={closeMenu} /></li>
          <li><Link text="Skills" to="/skills" onClick={closeMenu} /></li>
          <li><Link text="Projects" to="/projects" onClick={closeMenu} /></li>
          <li><Link text="Contacts" to="/contacts" onClick={closeMenu} /></li>
        </ul>
      </div>

      
      <div className="mobileNav__overlay" onClick={closeMenu}></div>
    </div>
  );
};

export default MobileNav;
