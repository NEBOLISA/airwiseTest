import { Link } from "react-router-dom";
import "./buttonComp.css";
function ButtonComp({ text }) {
  if (text === 'Login') {
    return (
      <Link to={'/login'}>
      <button className="btn_comp2">{text}</button>
      </Link>
    ) 
  } else {
    return (
      <Link to={'/login'}>
        <button className="btn_comp">{text}</button>
      </Link>
    ) 
  }
}
export default ButtonComp; 
