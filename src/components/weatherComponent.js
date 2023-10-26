import "./recommWeather.css";
function WeatherComponent() {
  return (
    <div className="right-side__wrapper">
      <div className="weather__box">
        <div className="weather__header">
          <img className="weather__icon" src="assets/sun.svg" alt="" />
          <div className="weather__header--right">
            <p className="weather__number">16°</p>
            <p className="weather__subtitle">Sunny</p>
          </div>
        </div>
        <div className="weather__info--wrapper">
          <div className="weather__info__header">
            <img src="assets/feels.svg" alt="" />
            <p className="weather__info__title">feels like</p>
            <div className="weather__info--subtitle">
              <img
                className="weather__info--arrow"
                src="assets/arrow.svg"
                alt=""
              />
              <p>
                18<b>°C</b>
              </p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src="assets/wind.svg" alt="" />
            <p className="weather__info__title">wind</p>
            <div className="weather__info--subtitle">
              <p>moderate</p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src="assets/humidity.svg" alt="" />
            <p className="weather__info__title">humidity</p>
            <div className="weather__info--subtitle">
              <img
                className="weather__info--arrow"
                src="assets/arrow.svg"
                alt=""
              />
              <p>83 %</p>
            </div>
          </div>
          <div className="weather__info__header">
            <img src="assets/pressure.svg" alt="" />
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
              src="assets/sunny2.svg"
              alt=""
            />
            <p className="dates__number--weather">16°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">TUE</p>
            <img
              className="dates__icon--weather"
              src="assets/rainy2.svg"
              alt=""
            />
            <p className="dates__number--weather">13°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">WED</p>
            <img
              className="dates__icon--weather"
              src="assets/cloudy2.svg"
              alt=""
            />
            <p className="dates__number--weather">13°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">THU</p>
            <img
              className="dates__icon--weather"
              src="assets/windy2.png"
              alt=""
            />
            <p className="dates__number--weather">8°</p>
          </div>
          <div className="division__line"></div>
          <div className="dates__header--wrapper">
            <p className="dates__header">FRI</p>
            <img
              className="dates__icon--weather"
              src="assets/thunder-rain2.svg"
              alt=""
            />
            <p className="dates__number--weather">4°</p>
          </div>
        </div>
      </div>
      <div className="air__box">
        <p className="air__title">Air Quality Index</p>
        <img className="info__icon" src="assets/info.svg" alt="" />
        <div className="air__box--wrapper">
          <p className="air__box--number">21</p>
          <p className="air__box--title">Good</p>
        </div>
        <div className="air__subtitle--wrapper">
          <div className="line__wrapper">
            <img src="assets/line.png" className="air__line" alt="" />
            <img className="air__point" src="assets/point.png" alt="" />
          </div>
          <p className="air__box--subtitle">
            Air quality is considered satisfactory, and air pollution poses
            little or no risk
          </p>
        </div>
      </div>
      <div className="pollution__btn">
        <div className="pollutants__wrapper">
          <img className="pollutants__icon" src="assets/danger.svg" alt="" />
          <p className="pollutants__text">Check Pollutants</p>
        </div>
      </div>
    </div>
  );
}
export default WeatherComponent;
