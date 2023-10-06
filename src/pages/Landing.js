import React, { useContext, useEffect } from "react";
import NavComp from "../components/navComp";
import mark from "../assets/images/mark.png";
import heroVector2 from "../assets/images/heroVector2.svg";
import StatsComponent from "../components/statsComponent";
import AboutComponent from "../components/aboutComponent";
import "../App.css";

import ButtonComp from "../components/buttonComp";
import FeaturesComponent from "../components/featuresComponent";
import WorksComponent from "../components/worksComponent";
import FooterComponent from "../components/footerComponent";
import StepsComponent from "../components/stepsComponent";
import ReviewComponent from "../components/reviewComponent";
import { useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export default function Landing() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const worksRef = useRef(null);
  const featuresRef = useRef(null);
  const HomeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // Update CSS variables for background color
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty(
        "--background_color",
        "var(--body_background_light)"
      );
    } else {
      root.style.setProperty(
        "--background_color",
        "var(--body_background_dark)"
      );
    }
  }, [isDarkMode]);
  return (
    <div className={isDarkMode ? "App light_mode" : "App"}>
      <NavComp
        mode={isDarkMode}
        scrollToSection={scrollToSection}
        worksRef={worksRef}
        featuresRef={featuresRef}
        HomeRef={HomeRef}
      />
      <section className="hero_section" ref={HomeRef}>
        <div className="hero_text_img_div">
          <div className="text_div">
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <p className="top_text">
                {" "}
                <span style={{ color: "#9747FF", fontSize: "58px" }}>
                  Don’t
                </span>{" "}
                let pollution destroy your health!{" "}
              </p>
              <div
                className="subtitle__wrapper"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="500"
                style={{ marginBottom: "20px" }}
              >
                <p
                  className="hero__subtitle"
                  style={{ marginTop: "0", marginBottom: "0px" }}
                >
                  Your Personal Guardian Application of{" "}
                  <span className="highlighted--text">
                    <b>Health</b>
                  </span>{" "}
                  and{" "}
                  <span className="highlighted--text">
                    <b>Air Quality</b>
                  </span>
                  .
                </p>
                <p className="hero__subtitle" style={{ marginTop: "0" }}>
                  Stay{" "}
                  <span className="highlighted--text">
                    <b>Informed</b>
                  </span>
                  , Stay{" "}
                  <span className="highlighted--text">
                    <b>Safe</b>
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="text_bottom_div">
              <div className="group1">
                <div
                  data-aos="fade-left"
                  data-aos-delay="500"
                  data-aos-duration="500"
                >
                  <p className="bottom_text">
                    Be <span style={{ color: "#9747FF" }}>Air</span>Wise
                  </p>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-delay="800"
                  data-aos-once="true"
                >
                  <img className="group1_icon" src={mark} alt="heroicon" />
                </div>
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="1300"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <ButtonComp text="Get Started" />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="1300"
            data-aos-duration="500"
            data-aos-once="true"
          >
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
      <FeaturesComponent featuresRef={featuresRef} />
      <WorksComponent worksRef={worksRef} />
      <StepsComponent />
      <ReviewComponent />
      <FooterComponent />
    </div>
  );
}
