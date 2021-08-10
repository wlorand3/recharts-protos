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
// import { report_card } from "../data/report_card";
import { email_threats } from "../data/email_threats";

// styles
import "../styles/charts.css";

function SimpleRadarChart() {
  // test data access
  //   console.log(report_card.length); // 5
  // console.log("email threats", email_threats); // 1

  return (
    <div className="chart-container">
      <ResponsiveContainer width="50%" aspect={1}>
        <RadarChart
          cx="50%"
          cy="50%"
          width={500}
          height={500}
          outerRadius="60%"
          innerRadius={10}
          data={email_threats}
        >
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis dataKey="threat_type" />
          <Radar
            name="Umbrella"
            dataKey="volumeA"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.5}
          />
          <Radar
            name="Outlier"
            dataKey="volumeB"
            stroke="#000"
            fill="#FF3"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleRadarChart;
