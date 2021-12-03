// react
import React from "react";

// recharts
import { Funnel, FunnelChart, LabelList, Tooltip } from "recharts";

// data
import { sales_process_data } from "../data/sales_process_data";

// styles
import "../styles/charts.css";

function SimpleFunnelChart() {
  console.log(sales_process_data.length); // 4

  return (
    <div className="chart-container">
      <FunnelChart width={730} height={250}>
        <Funnel dataKey="value" data={sales_process_data} isAnimationActive>
          <LabelList
            position="right"
            fill="#000"
            stroke="#000"
            dataKey="name"
          />
        </Funnel>
        <Tooltip />
      </FunnelChart>
    </div>
  );
}

export default SimpleFunnelChart;
