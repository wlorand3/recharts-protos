// react
import React from "react";

// components
// import SimpleLineChart from "./components/SimpleLineChart";
// import RadialBarChartProto from "./components/RadialBarChartProto";
import AreaChartCryptoPrice from "./components/AreaChartCryptoPrice";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="charts-header">
        <h1>Recharts Protos</h1>
      </header>
      {/* <RadialBarChartProto /> */}
      {/* <SimpleLineChart /> */}
      <AreaChartCryptoPrice />
    </>
  );
}

export default App;
