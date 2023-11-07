import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function CircularProgressBar({
  percentage,
  strokeWidth,
  circleRatio,
  rotation,
}) {
  return (
    <div style={{ width: 250 }}>
      <CircularProgressbar
        value={percentage}
        strokeWidth={strokeWidth}
        circleRatio={circleRatio}
        styles={buildStyles({
          strokeLinecap: "butt",
          rotation: rotation,
        })}
      />
    </div>
  );
}
export default CircularProgressBar;
