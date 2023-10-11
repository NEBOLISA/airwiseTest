import { Link } from "react-router-dom";
import "./buttonComp.css";
function ButtonComp({ text }) {
  if (text === "Get Started ") {
    return (
        <button className="btn_comp2">{text}</button>
    );
  } else {
    return (
        <button className="btn_comp">{text}</button>
    );
  }
}
export default ButtonComp;
