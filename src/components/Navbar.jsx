import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiBell } from "react-icons/hi";
import { useTask } from "../context/appContext";
const NavBar = () => {
  const { searchQuery, setSearchQuery, getFilteredTasks } = useTask();
  //   const {openModal}=useModal()
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  console.log(searchQuery);

  const handleSearch = () => {
    getFilteredTasks();
  };

  return (
    <div className="py-5 dark:text-slate-400 px-8 flex justify-between items-center ">
      <div className="relative flex-1 ">
        <input
          type="text"
          placeholder="Search task"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-3.5 px-3 rounded-lg w-full dark:bg-slate-800"
        />
        <BiSearch
          onClick={handleSearch}
          className="absolute top-4 text-xl right-4 text-slate-400 hover:cursor-pointer"
        />
      </div>
      <div className="flex-1 flex justify-center pl-6">{formattedDate}</div>
      <div className="flex-1 md:flex justify-end items-center gap-6 hidden">
        <HiBell className="text-2xl text-violet-600 dark:text-violet-800" />
        <button
          className=" w-36 text-white py-3 rounded-lg bg-violet-600 hover:bg-violet-700 dark:bg-violet-800"
          // onClick={openModal}
        >
          Add new task
        </button>
      </div>
    </div>
  );
};

export default NavBar;
