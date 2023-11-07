import "./reportBoxComp.css";
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
}) {
  return (
    <div className="reportBoxComp">
      <div className="repo_comp_header">
        <img className="repo_comp_img" src={icon} alt="icon" />
        <h3 className="repo_comp_text">{title}</h3>
      </div>
      <p className="subtitle_text p_tag">{subtitle}</p>
      <div className="down_img_div">{image}</div>
      <h3 className="readiness_sleep_text">{summaryText}</h3>
      <p className="readiness_text p_tag">{readinessText}</p>
      <div className="sleep_duration_mid_div">
        {sleepMidIcon && <img src={sleepMidIcon} alt="sleepMidIcon" />}
        <div className="mid_time">
          <p className="left_start_time p_tag">{sleepStart}</p>
          <p className="right_end_time p_tag">{sleepEnd}</p>
        </div>
      </div>
      <div className="sleep_duration_down_div">
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
      <div className="heart_rate_reading_div">
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
  );
}
export default ReportBoxComp;
