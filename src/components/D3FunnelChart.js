import { useEffect, useMemo, useRef } from "react";

import D3Funnel from "d3-funnel";

// data
// import { sales_process_data } from "../data/sales_process_data";
import { threat_hunt_data } from "../data/threat_hunt_data";

// styles
import "../styles/charts.css";

function D3FunnelChart() {
  const chartRef = useRef(null);

  const chartOptions = useMemo(() => {
    return {
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
          scale: ["#607ac8", "#188c7c", "#5f842e", "#937530"], // demo-0 (csx chart-colors) - get from css export
        },
        highlight: true, // demo-7
      },
      events: {
        click: {
          block(evt, d) {
            window.open("https://security.cisco.com/", "_blank");
          },
        },
      },
      label: {
        enabled: true, // demo-8
        fill: "#fff", // use #000 for dark theme ?! // jsx tertiary
        fontSize: "12px",
      },
      tooltip: {
        enabled: true,
        format: "{f} are {l}", // takes func or f-str
      },
    };
  }, []);

  useEffect(() => {
    // key dev distinction to check for the .current in a useEffect (whiteboard!)
    if (chartRef.current) {
      const chart = new D3Funnel("#funnel"); // check it with the new keyword (class style)
      chart.draw(threat_hunt_data, chartOptions); // key draw() method
    }
  }, [chartOptions]);

  return <div id="funnel" ref={chartRef} className="chart-container"></div>; // container div
}

export default D3FunnelChart;
