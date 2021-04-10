// react
import React from "react";

// components
import SimpleLineChart from "./components/SimpleLineChart";

// styles
import "./styles/globals.css";

function App() {
  return (
    <>
      <header className="charts-header">
        <h1>Recharts Protos</h1>
      </header>
      <SimpleLineChart />
    </>
  );
}

export default App;
