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
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../contexts/ApiContext";

function TodayTab({ Line, options2 }) {
  const [sleepReadingValue, setSleepReadingValue] = useState(87);
  const [readinessReadingValue, setReadinessReadingValue] = useState(86);
  const [heartInfo, setHeartInfo] = useState(63);
  const { setHealthReportsData } = useContext(ApiContext);
  const readiness = {
    percentage: 66,
    strokeWidth: 7,
    rotation: 0.75,
    circleRatio: 0.5,
  };

  useEffect(() => {
    setHealthReportsData((prevState) => ({
      ...prevState,
      heart: heartInfo,
      sleep: sleepReadingValue,
      readiness: readinessReadingValue,
    }));
  }, [heartInfo, sleepReadingValue, readinessReadingValue]);

  const [heartData, setHeartData] = useState({
    labels: ["12am", "6am", "12pm", "6am"],
    datasets: [
      {
        label: "Heart rate",
        // data: [50, 60, 70, 75],
        data: [20, 60, 90, 40, 60, 20, 50, 60],
        backgroundColor: ["#FF5656"],
        borderColor: ["#FF5656"],
        pointHoverRadius: 5,
        pointRotation: 2,
        tension: 0.4,
        borderJoinStyle: "round",
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
          className="readiness"
          icon={readinessIcon}
          title="Readiness"
          image={
            <SemiCircleProgress
              percentage={readinessReadingValue - 14}
              size={{
                width: 300,
                height: 250,
              }}
              hasBackground="true"
              strokeLinecap="butt"
              strokeWidth={5}
              strokeColor="#74D413"
              bgStrokeColor="#555555"
            />
          }
          ReadingValue={readinessReadingValue}
          summaryText="Bring it on"
          readinessText="Your readiness indicates that you’ve recovered well"
        />
      </div>
      <div className="today_sleep_div">
        <ReportBoxComp
          className="sleep"
          icon={sleep}
          title="Sleep duration"
          image={
            <SemiCircleProgress
              percentage={sleepReadingValue - 14}
              size={{
                width: 300,
                height: 250,
              }}
              hasBackground="true"
              strokeLinecap="butt"
              strokeWidth={5}
              strokeColor="#0162F3"
              bgStrokeColor="#555555"
            />
          }
          ReadingValue={sleepReadingValue}
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
          className="heart"
          icon={heart}
          title="HRV rate"
          image={
            <SemiCircleProgress
              percentage={heartInfo - 14}
              size={{
                width: 300,
                height: 250,
              }}
              hasBackground="true"
              strokeLinecap="butt"
              strokeWidth={5}
              strokeColor="#FF2450"
              bgStrokeColor="#555555"
            />
          }
          ReadingValue={heartInfo}
          // heartColoredIcon={heartColoredIcon}
          // heartBPMvalue={heartInfo}
          hrvRemark={
            "Your HRV indicates that you experience good rest, digestion, recovery, and sleep"
          }
          hrvAverage={"54"}
          hrvMax={"88"}
          hrv={"89ms"}
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
