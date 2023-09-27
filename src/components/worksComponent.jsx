import "./worksComponent.css";
import works from "../assets/images/worksImage.png";

const WorksComponent = () => {
  return (
    <div className="container">
      <h1>How it Works</h1>
      <div className="works__wrapper">
        <p>
          Airwise is an innovative platform that serves as a robust "combine" by
          seamlessly incorporating data from two main sources, namely Oura and
          IQAir. Its main goal is to offer users valuable insights on the best
          time to participate in outdoor activities, considering their physical
          well-being, current weather conditions, and overall air quality. By
          harnessing the capabilities of AirWise, individuals can confidently
          optimize their surroundings to maximize the advantages to their health
          and well-being.
        </p>
        <img src={works} alt="" />
      </div>
    </div>
  );
};

export default WorksComponent;
