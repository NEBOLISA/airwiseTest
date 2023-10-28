import locationIcon from "../assets/images/location.svg";
import "./locationComponent.css";
function LocationComponent() {
  return (
    <div className="location">
      <img src={locationIcon} alt="location" />
      <p className="location_text">Washington,D.C</p>
    </div>
  );
}
export default LocationComponent;
