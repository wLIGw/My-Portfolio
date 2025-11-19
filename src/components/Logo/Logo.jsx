import { Link } from "react-router-dom";
import "./style.scss";

const Logo = () => {
  return ( 
    <Link to="/" className="logo">
      Portfolio
    </Link>
  );
};

export default Logo;
