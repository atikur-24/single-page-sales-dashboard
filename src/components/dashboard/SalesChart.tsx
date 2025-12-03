"use client";

import type { TotalSale } from "@/lib/types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SalesChartProps {
  data: TotalSale[];
}

export default function SalesChart({ data }: SalesChartProps) {
  return (
    <div className="cst-gradient-card p-6">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        Total Sales Over Time
      </h2>
      {data?.length === 0 ? (
        <div className="py-4 text-center text-sm text-neutral-400">
          No sales data found
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value: number) => [
                `$${value.toLocaleString()}`,
                "Total Sales",
              ]}
              labelFormatter={(label) => new Date(label).toLocaleDateString()}
              contentStyle={{
                backgroundColor: "var(--theme-dark-purple-3)",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
              itemStyle={{
                color: "#fff",
              }}
              labelStyle={{
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="totalSale"
              stroke="#8253f2"
              strokeWidth={2}
              dot={{ fill: "#8253f2", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
