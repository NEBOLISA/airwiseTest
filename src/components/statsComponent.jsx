import "./statsComponent.css";
import { TbGrave } from "react-icons/tb";
import { AiOutlineAlert } from "react-icons/ai";
import { AiOutlineCloud } from "react-icons/ai";

const StatsComponent = () => {
  return (
    <div className="container">
       <div data-aos="fade-in" data-aos-duration="500" data-aos-delay="500" data-aos-once="true">
      <h1>Did you know that</h1>
      </div>
      <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="700" data-aos-once="true">
        <div className="box">
          <TbGrave className="images"> </TbGrave>
          <div className="box-content">
            <h2>2,500,000</h2>
            <p>
              People die worldwide due to{" "}
              <span class="highlighted-text">
                <b>air pollution</b>
              </span>
              .
            </p>
          </div>
        </div>
        <div className="box">
          <AiOutlineCloud className="images"> </AiOutlineCloud>
          <div className="box-content">
            <h2>1.00 %</h2>
            <p>
              Of global land area has safe air{" "}
              <span class="highlighted-text">
                <b>pollution levels</b>
              </span>
              .
            </p>
          </div>
        </div>
        <div className="box">
          <AiOutlineAlert className="images"> </AiOutlineAlert>
          <div className="box-content">
            <h2>4th</h2>
            <p style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              Greatest{" "}
              <span class="highlighted-text">
                <b>threat to humanity</b>
              </span>{" "}
              in a world full of problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;