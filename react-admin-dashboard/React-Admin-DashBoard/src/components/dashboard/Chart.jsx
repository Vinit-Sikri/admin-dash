import React, { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Context } from "../../context/contextApi";

ChartJS.register(LineElement, LinearScale, PointElement, CategoryScale);

function Chart() {
  const { chartData, themeMode } = useContext(Context);
  const labels = ["", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
  const [data, setdata] = useState();

  useEffect(() => {
    if (!chartData.Employee) return;
    setdata({
      labels,
      datasets: [
        {
          label: "Employee",
          data: Object.values(chartData.Employee),
          tension: 0.4,
          borderColor: "#9BDD7C",
          backgroundColor: "rgba(155, 221, 124, 0.2)",
        },
        {
          label: "Contractor",
          data: Object.values(chartData.Contractor),
          tension: 0.4,
          borderColor: "#E9A0A0",
          backgroundColor: "rgba(233, 160, 160, 0.2)",
        },
      ],
    });
  }, [chartData]);

  const options = {
    plugins: {},
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 17 },
          color: themeMode === "dark" ? "#f3f4f6" : "#374151",
        },
        min: 0,
      },
      y: {
        ticks: {
          font: { size: 17 },
          color: themeMode === "dark" ? "#f3f4f6" : "#374151",
        },
        min: 0,
        grid: {
          color: themeMode === "dark" ? "#444" : "#e5e7eb",
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div
      className={`pb-5 rounded-2xl p-7 space-y-7 transition-colors duration-300 ${
        themeMode === "dark"
          ? "bg-[#23243a] text-white shadow-lg"
          : "bg-white text-gray-900 shadow"
      }`}
      style={{
        boxShadow:
          themeMode === "dark"
            ? "0 4px 16px 0 rgba(0,0,0,0.55)"
            : "0 2px 8px 0 rgba(0,0,0,0.08)",
      }}
    >
      {/* Heading Portion & Legends */}
      <div className="top-chart-bar flex flex-row justify-between items-center">
        <div className="activites flex flex-col">
          <strong className="text-lg sm:text-2xl font-bold">
            Activities
          </strong>
          <div className={`font-thin text-sm sm:text-md ${themeMode === "dark" ? "text-gray-300" : "text-gray-500"}`}>
            May - June 2024
          </div>
        </div>

        {/* Mapping to render legends */}
        <div className="legends justify-center flex text-sm flex-col sm:flex-row">
          {chartData &&
            Object.keys(chartData).map((legend, i) => (
              <div
                className="flex mx-4 space-x-2 items-center flex-row"
                key={i}
              >
                <div
                  className={`sm:w-4 w-3 sm:h-4 h-3 rounded-full ${
                    legend === "Employee" ? "bg-[#9BDD7C]" : "bg-[#E9A0A0]"
                  } `}
                />
                <div className={themeMode === "dark" ? "text-gray-200" : "text-gray-700"}>
                  {legend}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Line Chart */}
      <div className="line-chart relative h-48 w-[99%]">
        {data ? <Line data={data} options={options} /> : null}
      </div>
    </div>
  );
}

export default Chart;
