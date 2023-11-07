import HealthReport from "../../components/HealthReport/healthReport";
import HomeHeader from "../../components/homeHeader";
import Recommendation from "../../components/recommendation";
import WeatherComponent from "../../components/weatherComponent";
import "./Home.css";

function Home() {
   

  return (
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-once="true"
      className="Home"
    >
      <HomeHeader />
      <HealthReport />
      <Recommendation />
      <WeatherComponent />
    </div>
  );
}
export default Home;
