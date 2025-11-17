import { Link as RouterLink, useLocation } from "react-router-dom";
import styles from "./style.module.scss";

const Link = ({ text, style, icon, iconPosition = "left", to, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <RouterLink
      to={to}
      onClick={onClick}  
      className={`
        ${styles.link}
        ${style === "light" ? styles.linkLight : ""}
        ${iconPosition === "right" ? styles.iconRight : ""}
        ${isActive ? styles.active : ""}
      `}
    >
      {icon && iconPosition === "left" && <img src={icon} alt="" />}
      {text}
      {icon && iconPosition === "right" && <img src={icon} alt="" />}
    </RouterLink>
  );
};

export default Link;
