import "./reviewComponent.css";
import world from "../assets/images/world.png";
import ball from '../assets/images/ball.png'
import smallball from '../assets/images/smallball.png'
import profileImage1 from "../assets/images/profile1.png";
import profileImage2 from "../assets/images/profile2.png";
import profileImage3 from "../assets/images/profile3.png";
import profileImage4 from "../assets/images/profile4.png";
import box1 from "../assets/images/firstbox.svg";
import box2 from "../assets/images/secondbox.svg";
import box3 from "../assets/images/thirdbox.svg";
import box4 from "../assets/images/fourthbox.svg";

const ReviewComponent = () => {
  return (
    <div className="comment__container">
      <img src={ball} className="purple__ball review__ball" alt="" />
      <img src={smallball} className="purple__smallball review__smallball" alt="" />
      <div className="comment__wrapper">
        <h1 className="comment__title">Let's see our User's Review</h1>
        <p className="comment__subtitle">
          Take a look at what people are saying about{" "}
          <span className="highlighted--text">
            <b>Air</b>
          </span>
          Wise!
        </p>
      </div>
      <img className="comment__img" src={world} alt="" />
      <img src={profileImage1} alt="" className="first__profile" />
      <img src={box1} className="hide1" alt="" />

      <img src={profileImage2} alt="" className="second__profile" />
      <img src={box3} className="hide2" alt="" />

      <img src={profileImage3} alt="" className="third__profile" />
      <img src={box4} className="hide3" alt="" />

      <img src={profileImage4} alt="" className="fourth__profile" />
      <img src={box2} className="hide4" alt="" />
    </div>
  );
};

export default ReviewComponent;
