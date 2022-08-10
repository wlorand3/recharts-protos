// react
import React from "react";

// components
// import SimpleLineChart from "./components/SimpleLineChart";
import MultiLineChart from "./components/MultiLineChart";
// import SecurityProductsRadialChart from "./components/SecurityProductsRadialChart";
// import AreaChartCryptoPrice from "./components/AreaChartCryptoPrice";
// import SimpleRadarChart from "./components/SimpleRadarChart";
// import RechartsFunnelChart from "./components/RechartsFunnelChart";
// import D3FunnelChart from "./components/D3FunnelChart";
// import DateHeatmap from "./components/DateHeatmap";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="charts-header">
        {/* <h1>React Calendar Heatmap Proto</h1> */}
        {/* <h1>Threat Hunt Funnel Chart</h1> */}
        {/* <h1>Recharts Funnel Chart</h1> */}
        {/* <h1>Area Chart Crypto Price</h1> */}
        {/* <h1>Email Threat Types</h1> */}
        {/* <h1>Simple Line Chart</h1> */}
        <h1>Multi Line Chart</h1>
        {/* <h1>Simple Radar Chart</h1> */}
      </header>
      {/* <SimpleRadarChart /> */}
      {/* <SecurityProductsRadialChart /> */}
      {/* <SimpleLineChart /> */}
      <MultiLineChart />
      {/* <AreaChartCryptoPrice /> */}
      {/* <RechartsFunnelChart /> */}
      {/* <D3FunnelChart /> */}
      {/* <DateHeatmap /> */}
    </>
  );
}

export default App;
