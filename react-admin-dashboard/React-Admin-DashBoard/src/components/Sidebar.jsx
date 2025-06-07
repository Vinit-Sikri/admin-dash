import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/contextApi";
import { MdSpaceDashboard, MdViewKanban } from "react-icons/md";
import { MdOutlineSettings, MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function Sidebar({ setShowSidebar }) {
  const { themeMode, setThemeMode } = useContext(Context);

  // Theme styles
  const gradientBg = themeMode === "dark"
    ? "bg-gradient-to-b from-[#1a2238] via-[#283655] to-[#1a2238]"
    : "bg-gradient-to-b from-[#f7fafc] via-[#e3eafc] to-[#f7fafc]";

  const textColor = themeMode === "dark" ? "text-white" : "text-[#1a2238]";
  const iconColor = themeMode === "dark" ? "#fff" : "#1a2238";
  const accentColor = "text-[#0077b6]";

  // Navigation items as per your initial requirement
  const navItems = [
    {
      name: "Dashboard",
      to: "/",
      icon: <MdSpaceDashboard size={22} color={iconColor} />,
    },
    {
      name: "Calendar",
      to: "/calendar",
      icon: <FaCalendarAlt size={22} color={iconColor} />,
    },
    {
      name: "Kanban",
      to: "/projects",
      icon: <MdViewKanban size={22} color={iconColor} />,
    },
    {
      name: "Settings",
      to: "/settings",
      icon: <MdOutlineSettings size={22} color={iconColor} />,
    },
  ];

  return (
    <aside className={`${gradientBg} font-sans ${textColor} py-10 px-7 rounded-2xl w-full h-full flex flex-col justify-between items-center relative shadow-xl transition-all duration-300`}>
      {/* Close Icon (mobile only) */}
      <button
        onClick={() => setShowSidebar(false)}
        className="sm:hidden absolute top-4 right-4 text-2xl focus:outline-none"
        aria-label="Close Sidebar"
      >
        <AiOutlineClose />
      </button>

      {/* Logo and Theme Toggle */}
      <div className="w-full flex flex-col items-center space-y-8">
        <Link to="/" className="font-extrabold text-3xl tracking-tight select-none">
          <span className={`${accentColor}`}>Ad</span>
          <span className="text-[#283655] dark:text-white">Board</span>
        </Link>
        <button
          onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/30 dark:bg-[#283655]/60 hover:bg-white/50 dark:hover:bg-[#283655]/80 transition text-base font-medium shadow"
        >
          {themeMode === "dark" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
          <span>{themeMode === "dark" ? "Light" : "Dark"} Mode</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-start w-full mt-10 space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className="flex items-center space-x-4 text-lg font-semibold hover:text-[#0077b6] transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Contact/Help */}
      <div className="mt-12 w-full flex flex-col items-center text-sm text-gray-400 dark:text-gray-300 opacity-90 space-y-1">
        <a href="/" className="hover:underline">
          Help Center
        </a>
        <a href="/" className="hover:underline">
          Contact Us
        </a>
      </div>
    </aside>
  );
}
