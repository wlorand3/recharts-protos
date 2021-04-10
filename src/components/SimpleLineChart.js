// react
import React from "react";

// recharts
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

// data
import { measurements } from "../data/measurements";

// styles
import "../styles/charts.css";

function SimpleLineChart() {
  console.log(measurements.length);

  return (
    <div className="chart-container">
      <LineChart width={600} height={300} data={measurements}>
        <Line dataKey="uv" type="monotone" stroke="#8884d8" />
        <CartesianGrid horizontal={true} stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default SimpleLineChart;
