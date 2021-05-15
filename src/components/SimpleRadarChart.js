// react
import React from "react";

// recharts
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

// data
import { report_card } from "../data/report_card";

// styles
import "../styles/charts.css";

function SimpleRadarChart() {
  // test data access
  //   console.log(report_card.length); // 5

  return (
    <div className="chart-container">
      {/* <ResponsiveContainer width="80%" height="80%"> */}
      <RadarChart
        cx="50%"
        cy="50%"
        width={500}
        height={500}
        outerRadius="60%"
        data={report_card}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.5}
        />
      </RadarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
}

export default SimpleRadarChart;
