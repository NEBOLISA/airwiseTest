import "./worksComponent.css";
import oura from "../assets/images/oura.jpg";
import airwise from "../assets/images/Airwisewhite.svg";
import openWeather from "../assets/images/openweather.png";

const WorksComponent = ({ worksRef }) => {
  return (
    <div className="container__work" ref={worksRef}>
      <div data-aos="fade-in" data-aos-once="true" data-aos-offset="500">
      <h1>How it Works</h1>
      </div>
      <div className="works__wrapper">
        <p data-aos="fade-in" data-aos-offset="500" data-aos-once="true" data-aos-duration='200'>
          Airwise: Real-time health and pollution insights for better outdoor
          living, powered by{" "}
          <a
            target="_blank"
            href="https://ouraring.com/?g_acctid=553-919-5922&g_adgroupid=135780338841&g_adid=574855521019&g_adtype=search&g_campaign=Brand_AllGeos_Eng_2022114&g_campaignid=15872040703&g_keyword=oura%20ring&g_keywordid=aud-2185977188622:kwd-306928467817&g_network=g&utm_campaign=Brand_AllGeos_Eng_2022114&utm_medium=cpc&utm_source=google&utm_source=google_search&gclid=Cj0KCQjwpc-oBhCGARIsAH6ote8Zyuf_24xWI2OqMY5zLtwVmhyUPs_jT1wVuhCSBIkhMS6kIVqSdPMaAj3OEALw_wcB"
          >
            <span className="highlighted-text works__btn">
              <b>Oura</b>
            </span>
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://openweathermap.org/guide">
            <span className="highlighted-text works__btn">
              <b>Openweathermap</b>
            </span>
          </a>{" "}
          data
        </p>
        <div className="work__box--wrapper">
          <div className="work__box" data-aos="fade-right" data-aos-offset="500" data-aos-once="true" data-aos-duration='200' data-aos-delay='400'>
            <div className="oura__detail"></div>
            <div className="logo__wrapper">
              <img src={oura} className="oura__logo" alt="" />
            </div>
            <div className="oura__text">
              <p style={{ fontWeight: "bold" }}>Stylish wearable rings</p>
              <p style={{ fontSize: "14px" }}>
                Tracks sleep, activity, and health metrics
              </p>
              <p style={{ fontSize: "14px" }}>Offers valuable insights</p>
              <p style={{ fontSize: "14px" }}>
                Optimizes well-being and performance
              </p>
            </div>
            <a
              target="_blank"
              href="https://ouraring.com/?g_acctid=553-919-5922&g_adgroupid=135780338841&g_adid=574855521019&g_adtype=search&g_campaign=Brand_AllGeos_Eng_2022114&g_campaignid=15872040703&g_keyword=oura%20ring&g_keywordid=aud-2185977188622:kwd-306928467817&g_network=g&utm_campaign=Brand_AllGeos_Eng_2022114&utm_medium=cpc&utm_source=google&utm_source=google_search&gclid=Cj0KCQjwpc-oBhCGARIsAH6ote8Zyuf_24xWI2OqMY5zLtwVmhyUPs_jT1wVuhCSBIkhMS6kIVqSdPMaAj3OEALw_wcB"
            >
              <button className="oura__btn">Learn More</button>
            </a>
          </div>
          <div className="work__box airwise__box" data-aos="fade-right" data-aos-offset="500" data-aos-once="true" data-aos-duration='200' data-aos-delay='600'>
            <div className="logo__wrapper">
              <img src={airwise} className="airwise__logo" alt="" />
            </div>
            <div className="oura__text">
              <p style={{ fontWeight: "bold" }}>Oura + OpenWeatherMap data</p>
              <p style={{ fontSize: "14px" }}>
                Real-time good outdoor recommendations
              </p>
              <p style={{ fontSize: "14px" }}>
                Health optimization on air quality
              </p>
              <p style={{ fontSize: "14px" }}>Your Well-being Partner</p>
            </div>
            <button className="airwise__btn">Get Started</button>
          </div>
          <div className="work__box" data-aos="fade-right" data-aos-offset="500" data-aos-once="true" data-aos-duration='200' data-aos-delay='800'>
            <div className="openweather__detail"></div>
            <div className="logo__wrapper">
              <img src={openWeather} className="openweather__logo" alt="" />
            </div>
            <div className="oura__text">
              <p style={{ fontWeight: "bold" }}>
                Global leader in tracking weather
              </p>
              <p style={{ fontSize: "14px" }}>
                Real-time and forecasted weather data
              </p>
              <p style={{ fontSize: "14px" }}>
                Supports informed decisions and future planning
              </p>
              <p style={{ fontSize: "14px" }}>Includes health considerations</p>
            </div>
            <a target="_blank" href="https://openweathermap.org/guide">
              <button className="openweather__btn"> Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksComponent;
