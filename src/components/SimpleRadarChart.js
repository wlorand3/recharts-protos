// react
import React from "react";

// recharts
import {
  PolarAngleAxis, // shows labels
  PolarGrid, // shows grid
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
  // holy smokes this works - thanx stack overflow
  function customTick({ payload, x, y, textAnchor, stroke, radius }) {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value redText"
          text-anchor={textAnchor}
        >
          <tspan x={x} dy="0em">
            {payload.value}
          </tspan>
        </text>
      </g>
    );
  }

  return (
    <div className="chart-container">
      <ResponsiveContainer width="50%" aspect={1}>
        <RadarChart
          cx="50%"
          cy="50%"
          width={250}
          height={250}
          outerRadius="60%" // default: "80%" -- can squeeze out the axis labels -- reduce to give them more room
          innerRadius={3}
          data={email_threats}
        >
          <PolarGrid gridType="polygon" /> {/* polygon || circle */}
          <PolarAngleAxis
            dataKey="threat_type"
            orientation="outer"
            tick={customTick}
          />
          />
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
