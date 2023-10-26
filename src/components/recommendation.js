import "./recommWeather.css";
import cycling from "../assets/images/recommenWeather/cycling.svg";
import hiking from "../assets/images/recommenWeather/hiking.svg";
import running from "../assets/images/recommenWeather/running.svg";
import windows from "../assets/images/recommenWeather/windows.svg";
function Recommendation() {
  return (
    <div className="middle__box--wrapper">
      <img src="assets/middle.svg" className="middle__img" alt="" />
      <div className="middle__box--content">
        <p className="middle__box--title">Enjoy outdoors from 9AM-11AM</p>
        <div className="recommendations__wrapper">
          <p className="recommendations__title">Our Recommendations</p>
          <div className="recommendations__box--wrapper">
            <div className="recommendations__box">
              <img src={cycling} alt="" />
              <p className="recommendations__text">Cycling</p>
            </div>
            <div className="recommendations__box">
              <img src={hiking} alt="" />
              <p className="recommendations__text">Hiking</p>
            </div>
            <div className="recommendations__box">
              <img style={{ padding: "5px" }} src={running} alt="" />
              <p className="recommendations__text">Running</p>
            </div>
            <div className="recommendations__division"></div>
            <div className="recommendations__box">
              <img src={windows} alt="" />
              <p className="recommendations__text">Open Windows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Recommendation;
