import Logo from '../Logo/Logo';
import './style.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__info">
        <Logo />
        <h4 className="footer__text"><span className="footer__span">©2025</span> Martin</h4>
        </div>
        </div>
        </footer>
    );
}

export default Footer;