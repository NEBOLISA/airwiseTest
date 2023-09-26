import "./buttonComp.css";
function ButtonComp({ text }) {
  if (text === 'Login') {
    return <button className="btn_comp2">{text}</button>
  } else {
    return <button className="btn_comp">{text}</button>;
  }
}
export default ButtonComp; 
