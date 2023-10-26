import "./navComp.css";
import logo from "../assets/images/Airwise.svg";
import logo2 from "../assets/images/AirWise2.svg";
import ButtonComp from "./buttonComp";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ToggleButton from "./toggleButton";
function NavComp({
  scrollToSection,
  worksRef,
  featuresRef,
  HomeRef,
  activeIndex,
}) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={isDarkMode ? "nav_bar light_mode" : "nav_bar"}>
      <div className="nav_left">
        <img src={isDarkMode ? logo2 : logo} alt="logo" />
      </div>
      <div className="nav_middle">
        <ul>
          <li
            className={activeIndex === "home" ? "active" : ""}
            onClick={() => scrollToSection(HomeRef, "home")}
          >
            Home
          </li>
          <li
            className={activeIndex === "features" ? "active" : ""}
            onClick={() => scrollToSection(featuresRef, "features")}
          >
            Features
          </li>
          <li
            className={activeIndex === "works" ? "active" : ""}
            onClick={() => scrollToSection(worksRef, "works")}
          >
            How it works
          </li>
        </ul>
      </div>
      <div className="nav_right">
        <div className="nav_right_wrapper">
          <ButtonComp text="Get Started " />
          <ToggleButton className="toggle" />
        </div>
      </div>
    </nav>
  );
}
export default NavComp;
