// react
import React from "react";

// data
import { security_products } from "../data/security_products";

// recharts
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

// styles
import "../styles/charts.css";
import "../styles/SecurityProductsRadialChart.css";

function RadialBarChartProto() {
  // must be inline style?
  const legendWrapperStyle = {
    top: 50,
    left: 425,
    lineHeight: "24px",
  };

  return (
    <div className="chart-container">
      <RadialBarChart
        width={700}
        height={500}
        cx={250}
        cy={190}
        innerRadius={20}
        outerRadius={140}
        barSize={15}
        data={security_products}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise={false}
          dataKey="installed"
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
