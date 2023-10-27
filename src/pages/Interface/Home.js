import HealthReport from "../../components/HealthReport/healthReport";
import Recommendation from "../../components/recommendation";
import WeatherComponent from "../../components/weatherComponent";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="home__middle--wrapper">
      <p className="home__title">Keep track of your outdoor living!</p>
      <Recommendation />
      <HealthReport />
      </div>
      <WeatherComponent />
    </div>
  );
}
export default Home;
