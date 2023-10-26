import HealthReport from "../../components/HealthReport/healthReport";
import Recommendation from "../../components/recommendation";
import WeatherComponent from "../../components/weatherComponent";
import "./Home.css";
function Home() {
  return (
    <div className="Home">
      <HealthReport />
      <Recommendation />
      <WeatherComponent />
    </div>
  );
}
export default Home;
