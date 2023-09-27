import "./worksComponent.css";
import oura from '../assets/images/oura.jpg'
import airwise from '../assets/images/airwiseLogo.png'
import openWeather from '../assets/images/openweather.png'

const WorksComponent = () => {
  return (
    <div className="container__work">
      <h1>How it Works</h1>
      <div className="works__wrapper">
        <p>
          Airwise: Real-time health and pollution insights for better outdoor
          living, powered by <span className="highlighted-text"><b>Oura</b></span> and <span className="highlighted-text"><b>Openweathermap</b></span> data
        </p>
        <div className="work__box">
            <img src={oura} className="oura__logo" alt="" />
        </div>
        <div className="work__box">
        <img src={airwise} className="airwise__logo" alt="" />
        </div>
        <div className="work__box">
        <img src={openWeather} className="openweather__logo" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorksComponent;
