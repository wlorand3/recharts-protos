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

// Mock data - last 30 days de price
const data = [];
let num = 30; // start 30 days back
for (num = 30; num >= 0; num--) {
  // push some objects into the data array and voila an array of objects data structure for iterating over
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: (Math.random() + 1).toFixed(2),
  });
}

//  Log the data
console.log(`${JSON.stringify(data, null, 2)}`);

function AreaChartCryptoPrice() {
  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" opacity="0.4" />
              <stop offset="75%" stopColor="#2451B7" opacity="0.05" />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} opacity={0.4} />
          <Area dataKey="value" stroke="#8884d8" fill="url(#color)" />
          <Tooltip />
          <XAxis dataKey="date" />
          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={num => `$${num.toFixed(2)}`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default AreaChartCryptoPrice;
