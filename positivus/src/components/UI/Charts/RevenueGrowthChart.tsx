"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", growth: 5 },
  { month: "Feb", growth: 12 },
  { month: "Mar", growth: 22 },
  { month: "Apr", growth: 35 },
  { month: "May", growth: 52 },
  { month: "Jun", growth: 75 },
];

export default function RevenueGrowthChart() {
  return (
    <div className="rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]">
      <h3 className="mb-2 text-3xl font-medium text-[#191A23]">
        Typical Client Growth
      </h3>

      <p className="mb-8 text-[#191A23]">
        Illustrative example of growth achieved through consistent digital marketing.
      </p>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="growth"
              stroke="#B9FF66"
              strokeWidth={4}
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}