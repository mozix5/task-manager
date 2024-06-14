import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useModal } from "../context/appContext";

const LeftBar = () => {
    const{openAddTask}=useModal()
  return (
    <div className=" sticky top-0 h-screen  w-64 bg-slate-100 dark:bg-slate-800 dark:text-slate-400">
      <div className=" pt-8 text-center font-bold text-lg">TO-DO LIST</div>
      <div className="mx-4">
        <button
          className="my-8 w-[100%] text-white py-3 rounded-lg bg-violet-600 hover:bg-violet-700 dark:bg-violet-800"
          onClick={openAddTask}
        >
          Add new task
        </button>
      </div>
      <div className=" flex flex-col gap-2">
        <MenuItem title="All tasks" route="/" />
        <MenuItem title="Important tasks" route="/important" />
        <MenuItem title="Completed tasks" route="/completed" />
        <MenuItem title="Uncompleted tasks" route="/uncompleted" />
      </div>
    </div>
  );
};

const MenuItem = ({ title, route }) => {
    const { pathname } = useLocation();
  
    const bgcolor =
      pathname === route
        ? "bg-violet-100 border-r-4 border-rose-500 text-rose-600 dark:border-slate-200 dark:bg-slate-700 dark:text-white"
        : "";
    return (
      <Link to={route}>
        <div
          className={`py-2 px-4 text-md hover:text-rose-600 dark:hover:text-white ${bgcolor}`}
        >
          {title}
        </div>
      </Link>
    );
  };

export default LeftBar;
