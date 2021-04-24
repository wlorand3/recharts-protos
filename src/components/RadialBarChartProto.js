// react
import React from "react";

// data
import { uv_by_age } from "../data/uv_by_age";

// recharts
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

// styles
import "../styles/charts.css";

function RadialBarChartProto() {
  console.log(
    "🚀 ~ file: RadialBarChartProto.js ~ line 6 ~ uv_by_age",
    uv_by_age
  );

  // no support for classNames for recharts <Legend
  const legendWrapperStyle = {
    top: 0,
    left: 350,
    lineHeight: "24px",
  };

  return (
    <div className="chart-container">
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={15}
        data={uv_by_age}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={legendWrapperStyle}
        />
      </RadialBarChart>
    </div>
  );
}

export default RadialBarChartProto;
