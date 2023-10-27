import "./homeHeader.css";
import LocationComponent from "./locationComponent";
function HomeHeader() {
  return (
    <div className="home_header">
      <p className="header_left_text">Keep track of your outdoor living!</p>
      <LocationComponent />
    </div>
  );
}
export default HomeHeader;
