import "./footerComponent.css";
import logo from "../assets/images/Airwise.svg";
import twitter from "../assets/images/Twitter.svg";
import google from "../assets/images/Google.svg";
import facebook from "../assets/images/Facebook.svg";

function FooterComponent() {
  return (
    <div className="footer__container">
      <div className="footer__row">
        <img className="footer__logo--img" src={logo} alt="" />
        <p className="footer__text">© 2023AIRWISE.COM. ALL RIGHTS RESERVERD.</p>
        <span className="socials__wrapper">
          <img className="socials" src={twitter} alt="" />
          <img className="socials"  src={google} alt="" />
          <img className="socials"  src={facebook} alt="" />
        </span>
      </div>
    </div>
  );
}
export default FooterComponent;
