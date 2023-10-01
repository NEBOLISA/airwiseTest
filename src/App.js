import "./App.css";
import NavComp from "./components/navComp";
import mark from "./assets/images/mark.png";
import heroVector2 from "./assets/images/heroVector2.svg";
import heroswapvector from "./assets/images/heroswapvector.svg";
import StatsComponent from "./components/statsComponent";
import AboutComponent from "./components/aboutComponent";

import ButtonComp from "./components/buttonComp";
import FeaturesComponent from "./components/featuresComponent";
import WorksComponent from "./components/worksComponent";
import FooterComponent from "./components/footerComponent";
import StepsComponent from "./components/stepsComponent";
import ReviewComponent from "./components/reviewComponent";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="App">
      <NavComp />
      <section className="hero_section">
        <div className="hero_text_img_div">
          <div className="text_div">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <p className="top_text" style={{ color: "white" }}>
                {" "}
                <span style={{ color: "#9747FF", fontSize: "58px" }}>
                  Don’t
                </span>{" "}
                let pollution destroy your health!{" "}
              </p>
            </div>
            <div className="text_bottom_div">
              <div className="group1">
                <div
                  data-aos="fade-left"
                  data-aos-delay="700"
                  data-aos-duration="500"
                >
                  <p
                    className="bottom_text"
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    Be <span style={{ color: "#9747FF" }}>Air</span>Wise
                  </p>
                </div>
                <div data-aos="fade-in" data-aos-delay="1000" data-aos-once="true">
                  <img className="group1_icon" src={mark} alt="heroicon" />
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="1500"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <ButtonComp text="Get Started" />
              </div>
            </div>
          </div>
          <div data-aos="fade-in" data-aos-delay="1500" data-aos-duration="500" data-aos-once="true">
            <div className="image_div">
              <img
                className="right_image"
                style={{
                  transition: "opacity 0.3s ease-in-out",
                }}
                src={heroVector2}
                alt="herovector2"
              />
            </div>
          </div>
        </div>
      </section>
      <StatsComponent />
      <AboutComponent />
      <FeaturesComponent />
      <WorksComponent />
      <StepsComponent />
      <ReviewComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
