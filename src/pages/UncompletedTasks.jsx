import React from "react";

import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";
import { useTask, useView } from "../context/appContext";
import Task from "../components/Task";
import AddTaskButton from "../components/AddTaskButton";
import ViewToggle from "../components/ViewToggle";

const UncompletedTasks = () => {
  const { view, gridView } = useView();
  const viewClass = view ? "grid-cols-1" : "grid-cols-3";
  const { tasks } = useTask();

  return (
    <div className="mx-8">
      <div className=" text-2xl font-semibold text-slate-600 mt-2">
        Uncompleted Tasks
      </div>
      <ViewToggle />
      <div>
        <div
          className={`mt-4 grid gap-2 sm:gap-4 xl:gap-6 items-end ${viewClass}`}
        >
          {tasks.map((task, index) => {
            return task.completed == false ? (
              <Task
                key={task._id}
                id={task._id}
                title={task.title}
                desc={task.description}
                date={task.date}
                completed={task.completed}
              />
            ) : (
              ""
            );
          })}
          <AddTaskButton />
        </div>
      </div>
    </div>
  );
};

export default UncompletedTasks;
