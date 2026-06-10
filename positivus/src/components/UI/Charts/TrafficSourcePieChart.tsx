"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "SEO",
    value: 40,
  },
  {
    name: "PPC",
    value: 25,
  },
  {
    name: "Social Media",
    value: 20,
  },
  {
    name: "Email",
    value: 15,
  },
];

const COLORS = [
  "#B9FF66",
  "#191A23",
  "#7BE141",
  "#D9D9D9",
];

export default function TrafficSourcePieChart() {
  return (
    <div className="rounded-[45px] border border-[#191A23] bg-[#F3F3F3] p-8 shadow-[0_5px_0_0_#191A23]">
      <h3 className="mb-2 text-3xl font-medium text-[#191A23]">
        Traffic Sources
      </h3>

      <p className="mb-8 text-[#191A23]">
        Where most of our clients' traffic comes from.
      </p>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}