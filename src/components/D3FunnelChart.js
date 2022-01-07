import { useEffect, useRef } from "react";

import D3Funnel from "d3-funnel";

// data
// import { sales_process_data } from "../data/sales_process_data";
import { threat_hunt_data } from "../data/threat_hunt_data";

// styles
import "../styles/charts.css";

function D3FunnelChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartOptions = {
        chart: {
          animate: 333,
          bottomPinch: 1, // demo-2
          curve: {
            enabled: true, // demo-1
            height: 20,
          },
          inverted: false, // demo-3
          height: 300,
          width: 500,
        },
        block: {
          barOverlay: true, // demo-4
          dynamicHeight: false, // demo-5
          fill: {
            type: "gradient", // demo-6  "gradient"
            scale: ["#607ac8", "#188c7c", "#5f842e", "#937530"], // demo-0 (csx chart-colors)
          },
          highlight: true, // demo-7
        },
        events: {
          click: {
            block(event, d) {
              window.open("https://security.cisco.com/", "_blank");
            },
          },
        },
        label: {
          enabled: true, // demo-8
          fill: "#fff", // use #000 for dark theme ?!
          fontSize: "12px",
        },
        tooltip: {
          enabled: true,
          format: "{f} are {l}", // takes func or f-str
        },
      };
      const chart = new D3Funnel("#funnel");
      chart.draw(threat_hunt_data, chartOptions);
      // chart.draw(sales_process_data, chartOptions);
    }
  }, []);

  return <div id="funnel" ref={chartRef} className="chart-container"></div>;
}

export default D3FunnelChart;
