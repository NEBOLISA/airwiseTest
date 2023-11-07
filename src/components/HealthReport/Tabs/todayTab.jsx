import CircularProgressBar from "../../CircularProgressBar";
import heart from "../../../assets/images/heart_icon.svg";
import sleep from "../../../assets/images/sleep_icon.svg";
import readinessIcon from "../../../assets/images/readiness_icon.svg";
import sleepMidIcon from "../../../assets/images/sleep_mid_icon.svg";
import sleepDurationIcon from "../../../assets/images/sleep_duration_icon.svg";
import sleepHeartIcon from "../../../assets/images/sleep_heart_icon.svg";
import heartColoredIcon from "../../../assets/images/heart_coloured_icon.svg";
import ActivitySummary from "@dynamic-data/oura-data";
import ReportBoxComp from "../reportBoxComp";
import { SemiCircleProgress } from "react-semicircle-progressbar";
import { useState } from "react";

function TodayTab({ Line, options2 }) {
  console.log(ActivitySummary.SleepSummaryAsync[0]);
  const readiness = {
    percentage: 66,
    strokeWidth: 7,
    rotation: 0.75,
    circleRatio: 0.5,
  };

  const [heartData, setHeartData] = useState({
    labels: ["12am", "6am", "12pm", "6am"],
    datasets: [
      {
        label: "Heart rate",
        // data: [50, 60, 70, 75],
        data: [20, 60, 90, 40, 60, 20, 50, 60],
        backgroundColor: ["#FF5656"],
        borderColor: ["#FF5656"],
        tension: 0.4,
      },
    ],
  });
  //  const percentage = 66;
  //  const strokeWidth = 7;
  //  const rotation = 0.75;
  //  const circleRatio = 0.5;
  // const array = [];
  //   array.map((item)=>{
  // if(!uniqueArray.includes(item)){
  // uniqueArray.push(item)
  // }

  return (
    <div data-aos="fade-in" className="todayTab">
      <div className="today_readiness_div">
        <ReportBoxComp
          icon={readinessIcon}
          title="Readiness"
          image={
            <SemiCircleProgress
              percentage={80}
              size={{
                width: 200,
                height: 200,
              }}
              strokeWidth={10}
              strokeColor="#f00"
            />
          }
          summaryText="Bring it on"
          readinessText="Your resting heart rate indicates that you’ve recovered well"
        />
      </div>
      <div className="today_sleep_div">
        <ReportBoxComp
          icon={sleep}
          title="Sleep duration"
          image={
            <CircularProgressBar
              percentage={readiness.percentage}
              strokeWidth={readiness.strokeWidth}
              circleRatio={readiness.circleRatio}
              rotation={readiness.rotation}
            />
          }
          summaryText="Optimal"
          sleepMidIcon={sleepMidIcon}
          sleepStart={"10:00pm"}
          sleepEnd={"6:30am"}
          sleepDurationIcon={sleepDurationIcon}
          sleepDuration={"7h 30min"}
          sleepHeartIcon={sleepHeartIcon}
          sleepBPMValue={"53bpm"}
        />
      </div>
      <div className="today_heart_div">
        <ReportBoxComp
          icon={heart}
          title="Heart Rate"
          image={<Line className="chart" data={heartData} options={options2} />}
          heartColoredIcon={heartColoredIcon}
          heartBPMvalue={"63"}
          topUnit={"BPM"}
          downUnit={"3minutes ago"}
        />
      </div>
      {/* <CircularProgressBar
        percentage={readiness.percentage}
        strokeWidth={readiness.strokeWidth}
        circleRatio={readiness.circleRatio}
        rotation={readiness.rotation}
      />
      <CircularProgressBar
        percentage={readiness.percentage}
        strokeWidth={readiness.strokeWidth}
        circleRatio={readiness.circleRatio}
        rotation={readiness.rotation}
      /> */}
      {/* <p style={{ marginTop: "30px", fontFamily: 'DM Sans' }}>Still in Development</p> */}
    </div>
  );
}
export default TodayTab;

{
  /* <ReactSlider
        className="customSlider"
        thumbClassName="customSlider-thumb"
        renderTrack={(props, state) => <div className="track" {...props}></div>}
      /> */
}
