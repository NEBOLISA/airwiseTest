import "./footerComponent.css";
import logo from "../assets/images/Airwise.svg";
import logoLight from "../assets/images/AirwiseFooterLight.svg";
import twitter from "../assets/images/Twitter.svg";
import google from "../assets/images/Google.svg";
import facebook from "../assets/images/Facebook.svg";
import twitterLight from "../assets/images/Twitter1.svg";
import googleLight from "../assets/images/Google1.svg";
import facebookLight from "../assets/images/Facebook1.svg";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
function FooterComponent() {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className="footer__container">
      <div className="footer__row">
        <img
          className="footer__logo--img"
          src={isDarkMode ? logoLight : logo}
          alt=""
        />
        <p className="footer__text">© 2023AIRWISE.COM. ALL RIGHTS RESERVERD.</p>
        <span className="socials__wrapper">
          <img
            className="socials"
            src={isDarkMode ? twitterLight : twitter}
            alt="twitter"
          />
          <img
            className="socials"
            src={isDarkMode ? googleLight : google}
            alt="google"
          />
          <img
            className="socials"
            src={isDarkMode ? facebookLight : facebook}
            alt="facebook"
          />
        </span>
      </div>
    </div>
  );
}
export default FooterComponent;
