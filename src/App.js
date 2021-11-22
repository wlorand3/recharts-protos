// react
import React from "react";

// components
// import SimpleLineChart from "./components/SimpleLineChart";
// import SecurityProductsRadialChart from "./components/SecurityProductsRadialChart";
import AreaChartCryptoPrice from "./components/AreaChartCryptoPrice";
// import SimpleRadarChart from "./components/SimpleRadarChart";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="charts-header">
        <h1>Area Chart Crypto Price</h1>
        {/* <h1>Email Threat Types</h1> */}
        {/* <h1>Simple Line Chart</h1> */}
        {/* <h1>Simple Radar Chart</h1> */}
      </header>
      {/* <SimpleRadarChart /> */}
      {/* <SecurityProductsRadialChart /> */}
      {/* <SimpleLineChart /> */}
      <AreaChartCryptoPrice />
    </>
  );
}

export default App;
