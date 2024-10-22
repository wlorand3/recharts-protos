import React from "react";

import {
  PolarAngleAxis, // shows radar axis labels
  PolarGrid, // shows grid
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

// data
import { mitre_tactics } from "../data/mitre_tactics_sample_data";

import "../styles/charts.css";

function MitreTacticsRadarChart() {
  // @TODO: rename this to be more tailored to the mitre tactics chart
  // renderTacticAxisLabel
  // customAxisLabel sounds good
  /*
    * add this in to func
    const labelWords = payload.value.split(' ');

   {labelWords.map((word, index) => (
          <tspan x={x} dy={`${index * 1.2}em`} key={`${word}-${index}`>
            {word}
          </tspan>

    *OLD:
    {/* <tspan x={x} dy="0em">
            {payload.value}
          </tspan>
           */

  function customTick({
    payload,
    x,
    y,
    textAnchor = "middle",
    stroke,
    radius,
  }) {
    // split the label into two lines
    const labelWords = payload.value.split(/ (.+)/);
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          stroke={stroke}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={textAnchor}
        >
          {labelWords.map((word, index) => (
            <tspan x={x} dy={`${index * 1.1}em`} key={`${word}-${index}`}>
              {word}
            </tspan>
          ))}
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
          data={mitre_tactics}
        >
          <PolarGrid gridType="polygon" /> {/* polygon || circle */}
          <PolarAngleAxis
            dataKey="tactic" // a field in the data
            orientation="outer"
            tick={customTick}
          />
          <Radar
            name="Tactics Covered"
            dataKey="percent_covered"
            stroke="#7d8aff"
            fill="#7d8aff"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MitreTacticsRadarChart;
