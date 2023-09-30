import "./App.css";
import NavComp from "./components/navComp";
import mark from "./assets/images/mark.png";
import ball from "../src/assets/images/ball.png";
import heroVector2 from "./assets/images/heroVector2.svg";
import heroswapvector from "./assets/images/heroswapvector.svg";
import StatsComponent from "./components/statsComponent";
import AboutComponent from "./components/aboutComponent";

import ButtonComp from "./components/buttonComp";
import { useState } from "react";
import FeaturesComponent from "./components/featuresComponent";
import WorksComponent from "./components/worksComponent";
import FooterComponent from "./components/footerComponent";
import StepsComponent from "./components/stepsComponent";

function App() {
  //state to handle hero section imaeg swap
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [TextColor, setTextColor] = useState(null);
  const [opacity, setOpacity] = useState(null);

  const handleMouseEnter = (imageUrl) => {
    setBackgroundImage(`url(${imageUrl})`);
    setTextColor("black");
    setOpacity("0");
  };
  const backgroundProperties = {
    backgroundImage: backgroundImage,
    transition: "background-image 1s ease-in-out",
  };
  const textTransition = "color 1s ease-in-out";
  const handleMouseLeave = () => {
    setBackgroundImage(null);
    setTextColor(null);
    setOpacity(null);
  };

  return (
    <div className="App">
      <NavComp />
      <section className="hero_section" style={backgroundProperties}>
        <div className="hero_text_img_div">
          <div className="text_div">
            <p
              className="top_text"
              style={{ color: TextColor, transition: `${textTransition}` }}
            >
              {" "}
              <span style={{ color: "#9747FF", fontSize: "58px" }}>
                Don’t
              </span>{" "}
              let pollution destroy your health!{" "}
            </p>
            <div className="text_bottom_div">
              <div className="group1">
                <p
                  className="bottom_text"
                  style={{
                    color: TextColor,
                    transition: `${textTransition}`,
                    fontFamily: "Poppins",
                  }}
                >
                  Be <span style={{ color: "#9747FF" }}>Air</span>Wise
                </p>
                <img className="group1_icon" src={mark} alt="heroicon" />
              </div>
              <ButtonComp text="Get Started" />
            </div>
          </div>
          <div className="image_div">
            <img
              className="right_image"
              style={{
                opacity: opacity,
                transition: "opacity 0.3s ease-in-out",
              }}
              src={heroVector2}
              alt="herovector2"
              onMouseEnter={() => handleMouseEnter(heroswapvector)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
      </section>
        <StatsComponent />
        <AboutComponent />
        <FeaturesComponent />
        <WorksComponent />
        <StepsComponent />
        <FooterComponent />
    </div>
  );
}

export default App;
