import "./reportBoxComp.css";
import CountUp from "react-countup";
function ReportBoxComp({
  icon,
  title,
  subtitle,
  image,
  readinessText,
  summaryText,
  sleepMidIcon,
  sleepStart,
  sleepEnd,
  sleepDurationIcon,
  sleepDuration,
  sleepHeartIcon,
  sleepBPMValue,
  heartColoredIcon,
  heartBPMvalue,
  topUnit,
  downUnit,
  className,
  commonClass,
  ReadingValue,
  weekMaxHeartReading,
  data,
}) {
  return (
    <div
      className={
        className === "weekHeart" || className === "weekReadiness"
          ? "reportBoxComp pstn_relative space_btw"
          : "reportBoxComp "
      }
    >
      <div className="repo_comp_header">
        <img className="repo_comp_img" src={icon} alt="icon" />
        <h3 className="repo_comp_text">{title}</h3>
      </div>
      <p className="subtitle_text p_tag">{subtitle}</p>
      <div
        className={
          commonClass === "weekClass"
            ? "down_img_div top_border_line"
            : "down_img_div"
        }
      >
        {image}
      </div>
      <div
        className={
          className === "readiness" || className === "sleep"
            ? "negative_mt"
            : ""
        }
      >
        <h1
          className={
            className === "readiness" || className === "sleep"
              ? "exact_reading"
              : "none"
          }
          style={{ textAlign: "center" }}
        >
          <CountUp end={ReadingValue} duration={4} />
        </h1>
        <h3
          className={
            className === "readiness" || className === "sleep"
              ? "readiness_sleep_text"
              : "none"
          }
        >
          {summaryText}
        </h3>
        <p
          className={readinessText ? "readiness_text p_tag" : "none"}
          style={{ marginTop: "1rem" }}
        >
          {readinessText}
        </p>
        <div className="sleep_duration_mid_div">
          {sleepMidIcon && <img src={sleepMidIcon} alt="sleepMidIcon" />}
          <div className="mid_time">
            <p className="left_start_time p_tag">{sleepStart}</p>
            <p className="right_end_time p_tag">{sleepEnd}</p>
          </div>
        </div>
        <div
          className={className === "sleep" ? "sleep_duration_down_div" : "none"}
        >
          <div className="left_side_down">
            {sleepDurationIcon && (
              <img
                src={sleepDurationIcon}
                alt="sleepDurationIcon"
                className="time_icon"
              />
            )}
            <p className="sleep_duration p_tag">{sleepDuration}</p>
          </div>
          <div className="right_side_down">
            {sleepHeartIcon && (
              <img
                src={sleepHeartIcon}
                alt="sleepHeartIcon"
                className="heart_icon"
              />
            )}
            <p className="heart_beat p_tag">{sleepBPMValue}</p>
          </div>
        </div>
        <div className={className === "weekHeart" ? "peak_reading" : "none"}>
          <p>
            <CountUp end={weekMaxHeartReading} duration={4} />
          </p>
        </div>
        <div
          className={className === "heart" ? "heart_rate_reading_div" : "none"}
        >
          {heartColoredIcon && (
            <img
              src={heartColoredIcon}
              alt="heartColoredIcon"
              className="heart_colored_icon"
            />
          )}
          <div className="exact_reading_div">
            <h3 className="reading_value">{heartBPMvalue}</h3>
            <div className="units_div">
              <p className="up_unit p_tag">{topUnit}</p>
              <p className="down_unit p_tag">{downUnit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReportBoxComp;
