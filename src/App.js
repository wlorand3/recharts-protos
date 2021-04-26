// react
import React from "react";

// components
// import SimpleLineChart from "./components/SimpleLineChart";
import SecurityProductsRadialChart from "./components/SecurityProductsRadialChart";
// import AreaChartCryptoPrice from "./components/AreaChartCryptoPrice";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="charts-header">
        <h1>Security Products Installed on Devices</h1>
      </header>
      <SecurityProductsRadialChart />
      {/* <SimpleLineChart /> */}
      {/* <AreaChartCryptoPrice /> */}
    </>
  );
}

export default App;
