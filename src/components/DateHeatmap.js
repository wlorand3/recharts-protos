// react
import React from "react";

// libs
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";

// data
// import { june_values } from "../data/counts_over_time_data";

// styles (+ required react-calendar-heatmap styles)
import "react-calendar-heatmap/dist/styles.css";
import "../styles/charts.css";

function DateHeatmap() {
  const today = new Date();

  const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  // temp data

  return (
    <div className="chart-container chart-box">
      <CalendarHeatmap
        // startDate={new Date("2022-06-01")}
        // endDate={new Date("2022-06-30")}
        startDate={shiftDate(today, -150)}
        endDate={today}
        // values={june_values}
        values={randomValues}
        classForValue={value => {
          if (!value) return "color-empty";
          return `color-github-${value.count}`;
        }}
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
        showWeekdayLabels={true}
        gutterSize={1}
        horizontal={true}
        // horizontal={false}
        showMonthLabels={true}
        onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip />
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
