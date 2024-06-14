import React from "react";
import { useModal, useView } from "../context/appContext";

const AddTaskButton = () => {
  const { view } = useView();
  const { openAddTask } = useModal();
  return (
    <div
      className={`${
        view ? "h-32" : "h-52 sm:h-64"
      }  rounded-lg p-3 sm:p-4 border-2 border-slate-300 border-dashed text-slate-400 flex justify-center items-center hover:bg-slate-300 hover:text-slate-500 cursor-pointer dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-300`}
      onClick={openAddTask}
    >
      Add new task
    </div>
  );
};

export default AddTaskButton;
