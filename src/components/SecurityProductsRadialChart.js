// react
import React from "react";

// data
import { security_products } from "../data/security_products";

// recharts
import {
  Legend,
  PolarGrid,
  RadialBar,
  RadialBarChart,
  // Tooltip,
} from "recharts";

// styles
import "../styles/charts.css";
import "../styles/SecurityProductsRadialChart.css";

function RadialBarChartProto() {
  // must be inline style?
  const legendWrapperStyle = {
    top: 40,
    left: 510,
    lineHeight: "24px",
  };

  return (
    <div className="chart-container">
      <RadialBarChart
        width={800}
        height={600}
        cx={280}
        cy={220}
        innerRadius={20}
        outerRadius={200}
        barSize={20}
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
        <PolarGrid gridType="polygon" polarAngles={[160]} />
        {/* <Tooltip /> */}

        <Legend
          iconSize={15}
          width={150}
          height={180}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={legendWrapperStyle}
        />
      </RadialBarChart>
    </div>
  );
}

export default RadialBarChartProto;
