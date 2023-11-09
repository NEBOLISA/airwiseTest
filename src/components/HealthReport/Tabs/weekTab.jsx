import heart from "../../../assets/images/heart_icon.svg";
import sleep from "../../../assets/images/sleep_icon.svg";
import readiness from "../../../assets/images/readiness_icon.svg";
import { useState } from "react";
import CountUp from "react-countup";
import ReportBoxComp from "../reportBoxComp";

function WeekTab({ Line, options, options2 }) {
  let weekMaxHeartReading;
  let weekMinHeartReading;
  const [readinessData, setUserData] = useState({
    labels: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    datasets: [
      {
        label: "Readiness",
        data: [2.7, +1.8, 2.0, 2.7, +3.6, 2.7, 3.7],
        backgroundColor: ["#74D413"],
        borderColor: ["#74D413"],
      },
    ],
  });
  const [sleepData, setSleepData] = useState({
    labels: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    datasets: [
      {
        label: "Sleep duration",
        data: [3.7, +2.7, +3.6, 2.8, 2.0, 1.8, 2.7],
        backgroundColor: ["#035BE2"],
        borderColor: ["#035BE2"],
      },
    ],
  });
  const [heartData, setHeartData] = useState({
    labels: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    datasets: [
      {
        label: "Heart rate",
        data: [20, 60, 90, 40, 60, 20, 50, 60],
        backgroundColor: ["#FF5656"],
        borderColor: ["#FF5656"],
        tension: 0.4,
      },
    ],
  });
  weekMaxHeartReading = Math.max(...heartData.datasets[0].data);
  //weekMinHeartReading = Math.min(...heartData.datasets[0].data);

  return (
    <div data-aos="fade-in" className="weekTab">
      <div className="readiness flex1">
        <ReportBoxComp
          icon={readiness}
          className={"weekReadiness"}
          commonClass={"weekClass"}
          title={"Readiness"}
          subtitle={
            <>
              Your{" "}
              <span style={{ color: "#74D413" }}>
                <b>readiness</b>
              </span>{" "}
              has improved in{" "}
              <b>
                <CountUp end={10} duration={4} />%
              </b>
            </>
          }
          image={
            <Line
              className="chart bg_color"
              data={readinessData}
              options={options}
            />
          }
        />
        {/* <div className="top_header">
          <img src={readiness} alt="readiness" className="report_icon" />
          <p className="report_name">Readiness</p>
        </div>
        <p className="report_summary">
          Your <span style={{color: '#74D413'}}><b>readiness</b></span> has improved in <b><CountUp end={10} duration={4} />%</b>
        </p>
        <div className="graph_div">
          <Line className="chart" data={readinessData} options={options} />
        </div> */}
      </div>
      <div className="sleep_duration flex1">
        <ReportBoxComp
          className={"weekSleep"}
          icon={sleep}
          commonClass={"weekClass"}
          title={"Sleep duration"}
          subtitle={
            <>
              Your{" "}
              <span style={{ color: "#035BE2" }}>
                <b>sleep duration</b>
              </span>{" "}
              increased in{" "}
              <b>
                <CountUp end={30} duration={4} /> min
              </b>
            </>
          }
          image={
            <Line
              className="chart bg_color"
              data={sleepData}
              options={options}
            />
          }
        />
        {/* <div className="top_header">
          <img src={sleep} alt="sleep" className="report_icon" />
          <p className="report_name">Sleep duration</p>
        </div>
        <p className="report_summary">
          Your{" "}
          <span style={{ color: "#035BE2" }}>
            <b>sleep duration</b>
          </span>{" "}
          has increased in{" "}
          <b>
            <CountUp end={30} duration={4} /> min
          </b>
        </p>
        <div className="graph_div">
          <Line className="chart" data={sleepData} options={options} />
        </div> */}
      </div>
      <div className="heart_rate flex1">
        <ReportBoxComp
          className={"weekHeart"}
          commonClass={"weekClass"}
          icon={heart}
          title={"Heart Rate"}
          subtitle={
            <>
              Your{" "}
              <span style={{ color: "#FF5656" }}>
                <b>heart rate</b>
              </span>{" "}
              is stable in{" "}
              <b>
                <CountUp end={20} duration={4} />%
              </b>
            </>
          }
          image={<Line className="chart" data={heartData} options={options2} />}
          weekMaxHeartReading={weekMaxHeartReading}
        />
        {/* <div className="top_header">
          <img src={heart} alt="heart" className="report_icon" />
          <p className="report_name">Heart Rate</p>
        </div>
        <p className="report_summary">
          Your{" "}
          <span style={{ color: "#FF5656" }}>
            <b>heart rate</b>
          </span>{" "}
          is stable in{" "}
          <b>
            <CountUp end={20} duration={4} />%
          </b>
        </p>
        <div className="graph_div heart_graph">
          <div className="peak_reading">
            <p>
              <CountUp end={weekMaxHeartReading} duration={4} />
            </p>
          </div>
          <Line className="chart" data={heartData} options={options2} />
        </div> */}
      </div>
    </div>
  );
}
export default WeekTab;
