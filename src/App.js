// react
import React from "react";

// components
// import SimpleLineChart from "./components/SimpleLineChart";
import RadialBarChartProto from "./components/RadialBarChartProto";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="charts-header">
        <h1>Recharts Protos</h1>
      </header>
      <RadialBarChartProto />
    </>
  );
}

export default App;
