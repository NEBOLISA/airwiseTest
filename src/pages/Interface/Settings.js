import { useContext } from "react";
import "./Settings.css";
import { ApiContext } from "../../contexts/ApiContext";
import active from "../../assets/active__circle.svg";
import unactive from "../../assets/unactive__circle.svg";

function Settings() {
  const { locationInformation, setScaleSelection, scaleSelection } = useContext(ApiContext);

  const celsiusBoxStatus = document.getElementById('.interfaceBox')

  function celsiusBox() {
    setScaleSelection('celsius')

  }

  function fahrenheitBox() {
    setScaleSelection('fahrenheit')
  }

  return (
    <div
      className="settings__wrapper"
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div className="settings__rightSide--wrapper">
        <div className="InterfaceSettings">
          <p className="InterfaceSettings--title">Interface</p>
          <div className="InterfaceSettings--subtitles">
            <div className="InterfaceSettings--subtitles--wrapper">
              <p>Dark Mode</p>
              <img src={active} />
            </div>
            <div className="InterfaceSettings--subtitles--wrapper">
              <p>Light Mode</p>
              <img src={unactive} />
            </div>
          </div>
        </div>
        <div className="InterfaceSettings">
          <p className="InterfaceSettings--title">Your Location</p>
          <div className="InterfaceSettings--subtitles">
            <p>{locationInformation}</p>
          </div>
        </div>
        <div className="InterfaceSettings">
          <p className="InterfaceSettings--title">Temperature Scale</p>
          <div className="InterfaceSettings--subtitles">
            <div className="interfaceBox__wrapper">
              <div onClick={celsiusBox} className={scaleSelection === 'celsius' ? 'interfaceBox interfaceBoxSelected' : 'interfaceBox'}></div>
              <p className="BoxText">Celsius</p>
            </div>
            <div className="interfaceBox__wrapper">
              <div onClick={fahrenheitBox} className={scaleSelection === 'fahrenheit' ? 'interfaceBox interfaceBoxSelected' : 'interfaceBox'}></div>
              <p className="BoxText">Fahrenheit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="interfaceText__btns">
        <div className="interfaceText__btn">Send us feedback</div>
        <div className="interfaceText__btn">AirWise Guide</div>
        <div className="interfaceText__btn">Privacy Policy</div>
      </div>
    </div>
  );
}
export default Settings;
