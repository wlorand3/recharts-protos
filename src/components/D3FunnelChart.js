import { useEffect, useRef } from "react";

import D3Funnel from "d3-funnel";

// Data
import { sales_process_data } from "../data/sales_process_data";

// styles
import "../styles/charts.css";

function D3FunnelChart() {
  const chartRef = useRef(null);
  console.log("sales process data is: ", sales_process_data);

  useEffect(() => {
    if (chartRef.current) {
      const chartOptions = {};
      const chart = new D3Funnel("#funnel");
      chart.draw(sales_process_data, chartOptions);
    }
  }, []);

  return <div id="funnel" ref={chartRef} className="chart-container"></div>;
}

export default D3FunnelChart;
