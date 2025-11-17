import Link from '../Link/Link';
import './style.scss';

const HeaderNav = ({ isOpen, closeMenu }) => {
    return (
        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
            <ul className="nav__list">
                <li><Link text="Home" to="/" onClick={closeMenu} /></li>
                <li><Link text="About me" to="/about" onClick={closeMenu} /></li>
                <li><Link text="Skills" to="/skills" onClick={closeMenu} /></li>
                <li><Link text="Projects" to="/projects" onClick={closeMenu} /></li>
                <li><Link text="Contacts" to="/contacts" onClick={closeMenu} /></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
