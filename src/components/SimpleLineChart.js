// react
import React from "react";

// recharts
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { useHotkeys } from "react-hotkeys-hook";

// data
import { measurements } from "../data/measurements";

// styles
import "../styles/charts.css";

function SimpleLineChart() {
  // console.log(measurements.length);

  // use d3 margin convention
  const chartMargin = { top: 5, right: 50, bottom: 5, left: 0 };

  const doAlert = () => alert("chart clicked");

  const keyRef = useHotkeys("a", () => doAlert());

  return (
    <div className="chart-container" ref={keyRef} tabIndex={0}>
      <LineChart
        width={600}
        height={300}
        data={measurements}
        margin={chartMargin}
        onClick={() => doAlert()}
      >
        <Line dataKey="uv" type="monotone" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default SimpleLineChart;
