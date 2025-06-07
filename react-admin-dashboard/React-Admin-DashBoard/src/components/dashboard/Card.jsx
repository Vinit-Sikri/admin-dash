import React, { useContext } from "react";
import { Context } from "../../context/contextApi";

export default function Card({ bg, text, value, icon }) {
  const { themeMode } = useContext(Context);

  function addCommasToNumber(number) {
    const numberString = Math.floor(number).toString();
    const lastThree = numberString.slice(-3);
    const otherNumbers = numberString.slice(0, -3);
    const formattedNumber =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      (otherNumbers ? "," : "") +
      lastThree;
    return formattedNumber;
  }

  // Text color based on theme
  const textColor = themeMode === "dark" ? "text-white" : "text-gray-900";
  const subTextColor = themeMode === "dark" ? "text-gray-300" : "text-gray-500";

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-end space-y-1 px-7 h-32 py-5 shadow-md transition-colors duration-300`}
      style={{
        background: bg,
        boxShadow: themeMode === "dark" ? `0 4px 16px 0 rgba(0,0,0,0.55)` : "0 2px 8px 0 rgba(0,0,0,0.08)",
      }}
    >
      <div className="absolute top-4 right-5 bg-white/40 dark:bg-black/40 rounded-full p-1">
        <img className="w-7" src={icon} alt={text} />
      </div>
      <div className={`text-md font-medium ${subTextColor}`}>Total {text}</div>
      <div className={`text-3xl font-bold ${textColor}`}>
        {text === "Revenues" ? "₹ " : ""}
        {addCommasToNumber(value)}
      </div>
    </div>
  );
}
