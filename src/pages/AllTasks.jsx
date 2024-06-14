import React from "react";

import TodoButton from "../components/AddTaskButton";
import { useTask, useView } from "../context/appContext";
import Task from "../components/Task";
import ViewToggle from "../components/ViewToggle";

const AllTasks = () => {
  const { tasks } = useTask();
  console.log(tasks);
  const { view, gridView } = useView();
  const viewClass = view ? "grid-cols-1" : "grid-cols-3";
  // console.log(view);
  return (
    <div className="mx-8 pb-6">
      <div className=" text-2xl font-semibold text-slate-600 mt-2">
        All tasks
      </div>
      <ViewToggle view={view} gridView={gridView}/>
      <div
        className={`mt-4 grid md:grid-cols-3 grid-cols-2 gap-6 grid-flow-row items-end ${viewClass}`}
      >
        {tasks?.map((task, index) => {
          return (
            <Task
              key={task._id}
              id={task._id}
              title={task.title}
              desc={task.description}
              date={task.createdAt}
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
