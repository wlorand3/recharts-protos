import React from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { measurements } from "../data/measurements";

import "../styles/charts.css";

function MultiLineChart() {
  const chartMargin = { top: 5, right: 50, bottom: 5, left: 0 };

  const mockData = [
    { key: "amt", color: "#FF0000" },
    { key: "uv", color: "#00FF00" },
    { key: "pv", color: "#0000FF" },
  ];

  return (
    <div className="chart-container chart-box">
      <LineChart
        width={600}
        height={300}
        data={measurements}
        margin={chartMargin}
      >
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        {mockData.map(dataObj => {
          return (
            <Line dataKey={dataObj.key} type="natural" stroke={dataObj.color} />
          );
        })}

        <Tooltip />
      </LineChart>
    </div>
  );
}

export default MultiLineChart;
