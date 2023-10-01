import "./navComp.css";
import logo from "../assets/images/Airwise.svg";
import ButtonComp from "./buttonComp";

function NavComp() {
  return (
    <nav className="nav_bar">
      <div className="nav_left">
        <img src={logo} alt="" />
      </div>
      <div className="nav_middle">
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>How it works</li>
        </ul>
      </div>
      <div className="nav_right">
        <ButtonComp text="Login" />
      </div>
    </nav>
  );
}
export default NavComp;
