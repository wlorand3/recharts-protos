// react
import React from "react";

// libs in play
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

// data
// import { june_values } from "../data/counts_over_time_data";

// styles (+ required react-calendar-heatmap library styles)
import "react-calendar-heatmap/dist/styles.css";
import "../styles/charts.css";

// component function
function DateHeatmap() {
  const today = new Date();

  // seed some data
  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  console.log("randome values is: ", randomValues);

  // temp data

  // Simply provide a container and render the lib component with the props it expects
  return (
    <div className="chart-container chart-box">
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        // startDate={new Date("2022-06-01")}
        // endDate={new Date("2022-06-30")}
        // Values stores Data
        values={randomValues}
        classForValue={value => {
          if (!value) return "color-empty";
          return `color-github-${value.count}`;
        }}
        // react-tooltip
        tooltipDataAttrs={value => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`,
          };
        }}
        // tooltipDataAttrs={value => {
        //   return {
        //     "data-tip": `${value.date} has count: ${value.count}`,
        //   };
        // }}
        horizontal={true}
        // horizontal={false}
        gutterSize={1}
        showWeekdayLabels={true}
        showMonthLabels={true} // depends on period data value
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      {/* Easy Add React Tooltip -likely usesthe tooltipDataAttrs prop! */}
      <ReactTooltip type="light" />
    </div>
  ); // container div

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  function getRange(count) {
    return Array.from({ length: count }, (_, i) => i);
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default DateHeatmap;
