import "./sidebar.css";
import logo from "../assets/images/AirwiseFooterLight.svg";
import settings from "../assets/images/settings.svg";
import home from "../assets/images/home.svg";
import questionIcon from "../assets/images/q&a.svg";
import qualityIcon from "../assets/images/airquality.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const items = ["Home", "Air Quality", "Settings", "Q&A"];
  const fieldNamesMapping = {
    Home: "",
    "Air Quality": "/interface/airQuality",
    Settings: "/interface/settings",
    "Q&A": "/interface/Q&A",
  };
  const linkNames = items.map((item) => fieldNamesMapping[item]);
  const logos = [home, qualityIcon, settings, questionIcon];
  // const pages = ["/", "interface"];
  return (
    <div className="sidebar">
      <div className="logo_div">
        <img className="logo_img" src={logo} alt="logo" />
      </div>
      <ul className="nav__links--wrapper">
        {items.map((item, index) => (
          // <Link to={pages[index]}></Link>
          <Link key={index} to={`${linkNames[index]}`}>
            <li
              key={index}
              className={index === activeItem ? "active" : ""}
              onClick={() => handleItemClick(index)}
            >
              <div className="menu_div">
                <img className="menu_logo" src={logos[index]} alt="icons" />
                <p className="title">{item}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;
