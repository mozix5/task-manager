import React from "react";

import TodoButton from "../components/AddTaskButton";
import { useTask, useView } from "../context/appContext";
import Task from "../components/Task";
import ViewToggle from "../components/ViewToggle";

const AllTasks = () => {
  const { tasks } = useTask();
  const { view, gridView } = useView();
  const viewClass = view ? "grid-cols-1" : "grid-cols-3";
  // console.log(view);

  // const reversedNote = [...note].reverse();
  return (
    <div className="mx-8">
      <div className=" text-2xl font-semibold text-slate-600 mt-2 ">
        All tasks
      </div>
      <ViewToggle view={view} gridView={gridView}/>
      <div
        className={`mt-4 grid gap-2 sm:gap-4 xl:gap-6 items-end ${viewClass}`}
      >
        {tasks.map((task, index) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              desc={task.desc}
              date={task.date}
              completed={task.completed}
              important={task.important}
            />
          );
        })}
        <TodoButton />
      </div>
    </div>
  );
};

export default AllTasks;