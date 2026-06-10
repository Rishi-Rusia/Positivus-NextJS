"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    option: "In-House Team",
    cost: 180000,
  },
  {
    option: "Positivus",
    cost: 36000,
  },
];

export default function PricingComparisonChart() {
  return (
    <div className="rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]">
      <h3 className="mb-2 text-3xl font-medium text-[#191A23]">
        Annual Cost Comparison
      </h3>

      <p className="mb-8 text-[#191A23]">
        See how partnering with us compares to building a full in-house marketing team.
      </p>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="option" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="cost"
              radius={[10, 10, 0, 0]}
              fill="#B9FF66"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}