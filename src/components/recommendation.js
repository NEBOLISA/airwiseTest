import "./recommWeather.css";
import cycling from "../assets/images/recommenWeather/cycling.svg";
import hiking from "../assets/images/recommenWeather/hiking.svg";
import running from "../assets/images/recommenWeather/running.svg";
import windows from "../assets/images/recommenWeather/windows.svg";
import middle from "../assets/images/recommenWeather/middle.svg";
import middleModerate from "../assets/images/recommenWeather/Moderate.svg";
import middlePoor from "../assets/images/recommenWeather/Poor.svg";
import circle from "../assets/images/green-circle.svg";

function Recommendation() {
  return (
    <div className="middle__box">
      <div className="middle__box--wrapper">
        <img src={middleModerate} className="middle__img" alt="" />
        <div className="middle__box--content">
          <p className="middle__box--title">
            Today is the <span style={{ color: "#00E0FF" }}>perfect</span> day
            for outdoors
          </p>
          <div className="parameters__wrapper">
            <p className="parameters__title">Check the main parameters</p>
            <div className="parameters__content--wrapper">
              <div className="parameters__content">
                <img src={circle} alt="" />
                <p>Weather</p>
              </div>
              <div className="parameters__content">
                <img src={circle} alt="" />
                <p>Air Quality index</p>
              </div>
              <div className="parameters__content">
                <img src={circle} alt="" />
                <p>Health parameters</p>
              </div>
            </div>
          </div>
          <div className="middle__box--division"></div>
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
    </div>
  );
}
export default Recommendation;
