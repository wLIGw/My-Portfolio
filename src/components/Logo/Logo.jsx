import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Logo = () => {
  const { t } = useTranslation();

  return ( 
    <Link to="/" className="logo">
      {t("logo")}
    </Link>
  );
};

export default Logo;
