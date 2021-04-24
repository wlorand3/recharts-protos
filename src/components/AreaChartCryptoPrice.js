// react
import React from "react";

// recharts
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// date-fns
import { format, parseISO, subDays } from "date-fns";

// dummy data - last 30 days, some value
const data = [];
for (let num = 30; num >= 0; num--) {
  // push some objects into the data array
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: (1 + Math.random()).toFixed(3), // randomize betw 1 and 2
  });
}

console.log(`${JSON.stringify(data, null, 2)}`);

function AreaChartCryptoPrice() {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <Area dataKey="value" />
          <XAxis dataKey="date" />
          <YAxis dataKey="value" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default AreaChartCryptoPrice;
