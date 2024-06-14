import React from "react";
import Task from "./Task";
import { useTask } from "../context/appContext";

const SearchedTask = () => {
  const { getFilteredTasks } = useTask();
  const filteredTasks = getFilteredTasks();
  return (
    <div
      className={`mt-4 grid grid-cols-3 gap-2 sm:gap-4 xl:gap-6 items-end mx-8`}
    >
      {filteredTasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          desc={task.desc}
          date={task.date}
          completed={task.completed}
          important={task.important}
        />
      ))}
    </div>
  );
};

export default SearchedTask;
