import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { useDarkMode, useTask } from "./context/appContext";
import SearchedTask from "./components/SearchedTask";
const Layout = () => {
  const { darkMode } = useDarkMode();
  const { searchQuery } = useTask();
  return (
    <div className={`flex relative ${darkMode ? "dark" : ""}`}>
      <div>
        <LeftBar />
      </div>
      <div className=" bg-slate-200 min-h-screen flex-1 dark:bg-slate-900">
        <Navbar />
        {searchQuery.trim() === "" ? <Outlet /> : <SearchedTask />}
      </div>
      <div>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
