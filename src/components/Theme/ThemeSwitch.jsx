import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext.jsx";
import Moon from "./moon.svg";
import Sun from "./sun.svg";
import "./style.scss";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="icon">
          {theme === "light" ? (
            <img src={Sun} alt="sun" />
          ) : (
            <img src={Moon} alt="moon" />
          )}
        </span>
      </span>
    </label>
  );
};

export default ThemeSwitch;




