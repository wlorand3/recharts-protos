// react
import React from "react";

// recharts
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// data
// import { sales_process_data } from "../data/sales_process_data";
import { threat_hunt_data } from "../data/threat_hunt_data";

// styles
import "../styles/charts.css";

function RechartsFunnelChart() {
  return (
    <div className="chart-container">
      <FunnelChart width={730} height={250}>
        <Funnel dataKey="value" data={threat_hunt_data} isAnimationActive>
          <LabelList
            position="right"
            fill="#000"
            stroke="#000"
            dataKey="label"
            style={{ marginLeft: "10px" }}
          />
        </Funnel>
        <Tooltip />
      </FunnelChart>
    </div>
  );
}

export default RechartsFunnelChart;
