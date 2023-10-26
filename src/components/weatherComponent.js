import "./recommWeather.css";
import sun from "../assets/images/recommenWeather/sun.svg";
import feels from "../assets/images/recommenWeather/feels.svg";
import wind from "../assets/images/recommenWeather/wind.svg";
import humidity from "../assets/images/recommenWeather/humidity.svg";
import pressure from "../assets/images/recommenWeather/pressure.svg";
import windy from "../assets/images/recommenWeather/windy2.png";
import cloudy from "../assets/images/recommenWeather/cloudy2.svg";
import rainy from "../assets/images/recommenWeather/rainy2.svg";
import thunderrain from "../assets/images/recommenWeather/thunder-rain2.svg";
import sunny from "../assets/images/recommenWeather/sunny2.svg";
import line from "../assets/images/recommenWeather/line.png";
import danger from "../assets/images/recommenWeather/danger.svg";
import arrow from "../assets/images/recommenWeather/arrow.svg";
import info from "../assets/images/recommenWeather/info.svg";
import point from "../assets/images/recommenWeather/point.png";

function WeatherComponent() {
  return (
    <div className="right-side__wrapper">
      <div className="weather__box">
        <div className="weather__header">
          <img className="weather__icon" src={sun} alt="IconWeather" />
          <div className="weather__header--right">
            <p className="weather__number">16°</p>
            <p className="weather__subtitle">Sunny</p>
          </div>
        </div>
        <div className="weather__info--wrapper">
          <div className="weather__info__header">
            <img src={feels} alt="FeelsLike" />
            <p className="weather__info__title">feels like</p>
            <div className="weather__info--subtitle">
              <img
                className="weather__info--arrow"
                src={arrow}
                alt=""
              />
              <p>
                18<b>°C</b>
              </p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src={wind} alt="Wind" />
            <p className="weather__info__title">wind</p>
            <div className="weather__info--subtitle">
              <p>moderate</p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src={humidity} alt="Humidity" />
            <p className="weather__info__title">humidity</p>
            <div className="weather__info--subtitle">
              <img
                className="weather__info--arrow"
                src={arrow}
                alt=""
              />
              <p>83 %</p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src={pressure} alt="" />
            <p className="weather__info__title">pressure</p>
            <div className="weather__info--subtitle">
              <p>1000 Pa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="week__box">
        <div className="dates__wrapper">
          <div className="dates__header--wrapper">
            <p style={{ color: "#0084FF" }} className="dates__header">
              MON
            </p>
            <img
              className="dates__icon--weather"
              src={sunny}
              alt=""
            />
            <p className="dates__number--weather">16°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">TUE</p>
            <img
              className="dates__icon--weather"
              src={rainy}
              alt=""
            />
            <p className="dates__number--weather">13°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">WED</p>
            <img
              className="dates__icon--weather"
              src={cloudy}
              alt=""
            />
            <p className="dates__number--weather">13°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">THU</p>
            <img
              className="dates__icon--weather"
              src={windy}
              alt=""
            />
            <p className="dates__number--weather">8°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">FRI</p>
            <img
              className="dates__icon--weather"
              src={thunderrain}
              alt=""
            />
            <p className="dates__number--weather">4°</p>
          </div>
        </div>
      </div>
      <div className="air__box">
        <p className="air__title">Air Quality Index</p>
        <img className="info__icon" src={info} alt="" />
        <div className="air__box--wrapper">
          <p className="air__box--number">21</p>
          <p className="air__box--title">Good</p>
        </div>
        <div className="air__subtitle--wrapper">
          <div className="line__wrapper">
            <img src={line} className="air__line" alt="" />
            <img className="air__point" src={point} alt="" />
          </div>
          <p className="air__box--subtitle">
            Air quality is considered satisfactory, and air pollution poses
            little or no risk
          </p>
        </div>
      </div>
      <div className="pollution__btn">
        <div className="pollutants__wrapper">
          <img className="pollutants__icon" src={danger} alt="" />
          <p className="pollutants__text">Check Pollutants</p>
        </div>
      </div>
    </div>
  );
}
export default WeatherComponent;
