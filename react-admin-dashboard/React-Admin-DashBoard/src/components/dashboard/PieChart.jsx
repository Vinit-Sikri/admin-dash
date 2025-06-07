import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Context } from "../../context/contextApi";

ChartJS.register(ArcElement, Tooltip);

export function PieChart() {
  const { pieChartData } = useContext(Context);

  // Categories and fallback data
  const labels = ["Enterprise SaaS", "Cloud Infrastructure", "Consulting Services"];
  const dataValues = labels.map((label) => pieChartData?.[label] ?? 50);
  const colors = ["#4A90E2", "#50E3C2", "#F5A623"];

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        hoverBackgroundColor: colors.map((c) => c + "CC"),
        borderColor: "#fff",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.label}: ${context.parsed} units`,
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-[#23243a] rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-xl mx-auto">
      {/* Heading */}
      <div className="w-full mb-2">
        <div className="text-base font-medium text-gray-500 dark:text-gray-300">
          Top Products Distribution
        </div>
        <div className="flex flex-row items-end justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Revenue Distribution by Business Unit
          </h2>
          <span className="text-xs text-gray-400 dark:text-gray-400 ml-2 mb-1">
            Q2 2025
          </span>
        </div>
      </div>

      {/* Chart and Custom Legends */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-4">
        {/* Pie chart */}
        <div className="w-48 h-48 relative flex items-center justify-center">
          <Pie data={data} options={options} />
        </div>
        {/* Custom Legends */}
        <div className="flex flex-col ml-0 md:ml-8 mt-6 md:mt-0 space-y-4">
          {labels.map((label, idx) => (
            <div className="flex items-center space-x-3" key={label}>
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: colors[idx] }}
              />
              <span className="text-gray-700 dark:text-gray-200 text-base font-medium">
                {label}
              </span>
              <span className="font-bold text-gray-900 dark:text-white ml-2">
                {dataValues[idx]}
              </span>
              <span className="text-xs text-gray-400 ml-1">units</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
