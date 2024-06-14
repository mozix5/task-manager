import React from "react";
import useTaskState from "../utils/taskState";
import { useDarkMode } from "../context/appContext";

const RightBar = () => {
  const {
    getCompletedTasks,
    getTotalTasks,
    calculateProgress,
    totalTasks,
    completedTasks,
  } = useTaskState;
  const {darkMode,toggleDarkMode}=useDarkMode()
  const progress = calculateProgress;
  return (
    <div className="hidden sticky top-0 dark:bg-slate-800 dark:text-slate-400 h-screen w-[16rem] bg-slate-100 xl:flex flex-col p-5">
      <div className="flex-1 ">
        <div className="flex justify-center items-center gap-4">
          <div>HI, User!</div>
          <div className="  h-15 w-10 ">
            <img />
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div>Darkmode</div>

          {/* <Switch {...label} className="" onChange={toggleDarkMode} /> */}
          <button onClick={toggleDarkMode}>dark mode</button>
        </div>
        <div className="py-5 border-b-2 border-slate-200 dark:border-slate-700">
          <div className="flex justify-between ">
            <div>All tasks</div>
            <div>
              {completedTasks}/{totalTasks}
            </div>
          </div>
          <div className="bg-slate-200 h-2 rounded-full my-2 dark:bg-slate-700">
            <div
              className="bg-blue-500 h-full rounded-full "
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="my-6">No tasks today</div>
      </div>
      <div>
        <button className="hover:text-red-500">Delete all data</button>
        <div className="mt-4 bg-lime-300 rounded-md py-2 flex justify-center text-lime-800 hover:bg-lime-400 dark:bg-lime-400 dark:hover:bg-lime-500">
          Project by Mosin
        </div>
      </div>
    </div>
  );
};

export default RightBar;
