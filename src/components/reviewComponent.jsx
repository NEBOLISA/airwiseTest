import "./reviewComponent.css";
import world from "../assets/images/world.png";
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
      <div>
        <h1
          className="comment__title"
          data-aos="fade-in"
          data-aos-once="true"
          data-aos-offset="300"
        >
          Let's see our User's Review
        </h1>
        <p
          className="comment__subtitle"
          data-aos="fade-in"
          data-aos-offset="300"
          data-aos-once="true"
          data-aos-duration="200"
        >
          Take a look at what people are saying about{" "}
          <span className="highlighted--text">
            <b>Air</b>
          </span>
          Wise!
        </p>
      </div>
      <div
        className="comment__wrapper"
        data-aos="fade-in"
        data-aos-once="true"
        data-aos-offset="300"
      >
        <div className="comment__content">
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
      </div>
    </div>
  );
};

export default ReviewComponent;
