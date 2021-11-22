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

// styles
import "../styles/area-chart-crypto-price.css";

// Mock data - last 30 days de price // create an [] of {}
const data = [];
let num = 30; // start 30 days back and go to today
for (num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: (Math.random() + 1).toFixed(2),
  });
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active) return null;
  return (
    <div className="tooltip">
      <h4>{format(parseISO(label), "eee, MMM d yyyy")}</h4>
      <p>${payload[0].value} CAD</p>
    </div>
  );
};

function AreaChartCryptoPrice() {
  return (
    <>
      <ResponsiveContainer
        width="100%"
        height={600}
        className="chart-background"
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaColorFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#2451B7" stopOpacity={1} />
              <stop offset="90%" stop-color="#2451B7" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} opacity={0.3} />
          <Area dataKey="value" stroke="#8884d8" fill="url('#areaColorFade')" />
          <Tooltip content={<CustomTooltip />} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={dateStr => {
              const date = parseISO(dateStr);
              return date.getDate() % 7 === 0 ? format(date, "MMM d") : "";
            }}
          />
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
