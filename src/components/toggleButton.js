import "./toggleButton.css";

import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
function ToggleButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggleButton">
      <input
        className="input"
        onClick={toggleTheme}
        checked={isDarkMode}
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="label" for="darkmode-toggle">
        <BsSun className="sun svg" />
        <BsMoon className="moon svg" />
      </label>
    </div>
  );
}
export default ToggleButton;
