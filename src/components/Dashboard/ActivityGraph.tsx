"use client";

import React from "react";
import { FiUser } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    desktop: 4000,
    mobile: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    desktop: 3000,
    mobile: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    desktop: 2000,
    mobile: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    desktop: 2780,
    mobile: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    desktop: 1890,
    mobile: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    desktop: 2390,
    mobile: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    desktop: 3490,
    mobile: 4300,
    amt: 2100,
  },
];

export const ActivityGraph = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser /> Activity
        </h3>
      </div>
      {/* our graph */}
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -12,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#e4e4e7" />
            <XAxis
              dataKey="name"
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
              //   padding={{ left: 30, right: 30 }}
            />
            <YAxis
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
              //   padding={{ left: 30, right: 30 }}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Line
              type="monotone"
              dataKey="mobile"
              stroke="#ef4444"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="desktop"
              stroke="#78716c"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
