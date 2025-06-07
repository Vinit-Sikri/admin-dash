import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const barChartData = [
  {
    label: "Frontend - React",
    data: [200, 180, 220, 210, 230],
    color: "#4A90E2",
  },
  {
    label: "Frontend - Vue",
    data: [150, 160, 170, 165, 180],
    color: "#42B883",
  },
  {
    label: "Backend - Node.js",
    data: [180, 190, 200, 195, 205],
    color: "#F5A623",
  },
  {
    label: "Backend - Django",
    data: [130, 140, 135, 145, 150],
    color: "#50E3C2",
  },
  {
    label: "Database - PostgreSQL",
    data: [120, 110, 130, 125, 135],
    color: "#9013FE",
  },
];

const categories = ["Jan", "Feb", "Mar", "Apr", "May"];

const series = barChartData.map(({ label, data, color }) => ({
  data,
  label,
  color,
}));

const BarChartComponent = () => (
  <div className="bar-chart-box space-y-6 flex flex-col w-full md:px-6 py-0 pt-4 sm:py-7">
    {/* Heading */}
    <div className="bar-chart-heading flex flex-col sm:flex-row justify-between px-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Technology Adoption Trends
      </h2>
      <p className="text-xs text-gray-500 dark:text-gray-400 self-center">
        Monthly Stats - 2025
      </p>
    </div>

    {/* Chart and Legends */}
    <div className="flex flex-col sm:flex-row justify-between">
      {/* Bar chart */}
      <div className="bar-chart w-full sm:w-[60%]">
        <BarChart
          xAxis={[{ data: categories, scaleType: "band" }]}
          series={series}
          width={600}
          height={400}
          // The color for each bar is taken from the series.color property
        />
      </div>

      {/* Legends */}
      <div className="md:flex flex-col items-start space-y-3 w-full sm:w-auto mt-6 sm:mt-0 px-4 sm:px-0">
        {barChartData.map(({ label, color }) => (
          <div key={label} className="flex items-center space-x-3">
            <div
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-gray-900 dark:text-gray-100 font-semibold text-sm">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BarChartComponent;
