import React, { useContext } from "react";
import Card from "./Card";
import Chart from "./Chart";
import { PieChart } from "./PieChart";
import Schedules from "./Schedules";
import { Context } from "../../context/contextApi";
import revenue from "../../images/Vector.svg";
import likes from "../../images/Vector (1).svg";
import users from "../../images/Vector (2).svg";
import trans from "../../images/total_transactions_icon.svg";
import LineChart from "./LineChart";

export default function Dashboard() {
  const { themeMode, user, cardData } = useContext(Context);

  // Improved: Use dark backgrounds for cards in dark mode
  const getBgAndId = (card) => {
    if (themeMode === "dark") {
      switch (card.title) {
        case "Revenues":
          return { bg: "#1e3a34", icon: revenue }; // deep teal
        case "Transactions":
          return { bg: "#4b3b1f", icon: trans }; // deep brown
        case "Likes":
          return { bg: "#4b232a", icon: likes }; // deep rose
        case "Users":
          return { bg: "#2d2e4a", icon: users }; // deep lavender
        default:
          return { bg: "#2d2e4a", icon: users };
      }
    } else {
      switch (card.title) {
        case "Revenues":
          return { bg: "#C3F7E4", icon: revenue }; // mint green
        case "Transactions":
          return { bg: "#FFF0D1", icon: trans }; // soft orange
        case "Likes":
          return { bg: "#FFD6DA", icon: likes }; // blush pink
        case "Users":
          return { bg: "#D8D9F7", icon: users }; // lavender
        default:
          return { bg: "#D8D9F7", icon: users };
      }
    }
  };

  // Text color helpers
  const headingClass = "text-xl font-semibold " +
    (themeMode === "dark" ? "text-white" : "text-gray-800");
  const valueClass = themeMode === "dark" ? "text-white" : "text-gray-900";

  return (
    <div className={`dashboard-container px-4 md:px-8 py-6 space-y-10 
      ${themeMode === "dark" ? "bg-[#181a1b]" : "bg-[#f9fafb]"} transition-colors`}>
      
      {/* Top Stats Section */}
      <section className="stats-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData?.map((card, i) => (
          <Card
            key={i}
            bg={getBgAndId(card).bg}
            icon={getBgAndId(card).icon}
            text={card.title}
            value={card.value}
            textColor={themeMode === "dark" ? "text-white" : "text-gray-900"}
            valueColor={valueClass}
          />
        ))}
      </section>

      {/* Line Chart Section */}
      <section
        className={`linechart-section rounded-xl p-5 shadow-md transition-all duration-300 
        ${themeMode === "dark" ? "bg-[#23243a]" : "bg-[#f0f5ff]"}`}
      >
        <h2 className={headingClass}>Monthly Revenue Trends</h2>
        <Chart
          height={340}
          customColors={themeMode === "dark" ? ["#a5b4fc", "#38bdf8"] : ["#9F7AEA", "#63B3ED"]}
          labelColor={themeMode === "dark" ? "#f3f4f6" : "#4b5563"}
        />
      </section>

      {/* Pie + Schedules Section */}
      <section className="charts-schedule-section grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div
          className={`rounded-xl p-5 shadow-md transition-all duration-300 
          ${themeMode === "dark" ? "bg-[#253b49]" : "bg-[#e3f4ff]"}`}
        >
          <h2 className={headingClass}>Top Products Distribution</h2>
          <PieChart
            height={280}
            labelColor={themeMode === "dark" ? "#f3f4f6" : "#4b5563"}
          />
        </div>
        <div
          className={`rounded-xl p-5 shadow-md transition-all duration-300 
          ${themeMode === "dark" ? "bg-[#433f2f]" : "bg-[#fff7e6]"}`}
        >
          <h2 className={headingClass}>Meeting Schedules</h2>
          <Schedules textColor={themeMode === "dark" ? "text-white" : "text-gray-900"} />
        </div>
      </section>

      {/* Skills Bar Chart Section */}
      <section className={`bar-chart-section rounded-xl p-5 shadow-md 
        ${themeMode === "dark" ? "bg-[#3a2e4f]" : "bg-[#f6edff]"}`}>
        <h2 className={headingClass}>Technical Skill Trends</h2>
        <LineChart
          height={380}
          showLegend={true}
          labelColor={themeMode === "dark" ? "#f3f4f6" : "#4b5563"}
        />
      </section>
    </div>
  );
}
