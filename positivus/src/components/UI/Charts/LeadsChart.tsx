"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    month: "Jan",
    leads: 120,
  },
  {
    month: "Feb",
    leads: 180,
  },
  {
    month: "Mar",
    leads: 240,
  },
  {
    month: "Apr",
    leads: 320,
  },
  {
    month: "May",
    leads: 430,
  },
  {
    month: "Jun",
    leads: 580,
  },
];

export default function LeadsChart() {
  return (
    <div className="rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]">
      <h3 className="mb-2 text-3xl font-medium text-[#191A23]">
        Lead Generation Growth
      </h3>

      <p className="mb-8 text-[#191A23]">
        Typical lead growth after implementing our marketing strategies.
      </p>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="leads"
              stroke="#191A23"
              fill="#B9FF66"
              fillOpacity={0.7}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}