// import { useState, useEffect } from "react";
// import useFetchTasks from "./fetchTasks";
// import { useNavigate } from "react-router-dom";
// import { useUserData } from "../context/appContext";

// const useTaskState = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // const { token } = useUserData();
//   const { tasks, setTasks, loading, error } = useFetchTasks(
//     "https://task-manager-api-rm04.onrender.com/task",
//   );
//   const [view, setView] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();
//   const gridView = () => {
//     setView((preValue) => !preValue);
//   };

//   const openAddTask = () => {
//     // setIsOpen(true);
//     navigate("create");
//   };
//   const closeModal = () => {
//     // setIsOpen(false);
//     navigate("/");
//   };

//   const addTask = (newTask) => {
//     setTasks((prevTask) => [...prevTask, newTask]);
//   };
//   const deleteTask = (id) => {
//     setTasks((prevTask) => prevTask.filter((_, index) => index !== id));
//   };

//   const toggleComplete = (id) => {
//     setTasks((prevTask) =>
//       prevTask.map((task, index) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   const importantTasks = (id) => {
//     setTasks((prevTask) =>
//       prevTask.map((task, index) =>
//         task.id === id ? { ...task, important: !task.important } : task
//       )
//     );
//   };

//   const searchTasksByTitle = (query) => {
//     setSearchQuery(query);
//   };

//   const getFilteredTasks = () => {
//     return tasks.filter((task) =>
//       task.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   const toggleDarkMode = () => {
//     setDarkMode((preValue) => !preValue);
//   };

//   const getTotalTasks = () => {
//     return tasks.length;
//   };

//   const getCompletedTasks = () => {
//     // return tasks.filter((task) => task.completed).length;
//   };

//   const calculateProgress = () => {
//     const totalTasks = getTotalTasks();
//     const completedTasks = getCompletedTasks();
//     return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
//   };

//   const totalTasks = getTotalTasks();
//   const completedTasks = getCompletedTasks();
//   return {
//     isOpen,
//     openAddTask,
//     closeModal,
//     tasks,
//     addTask,
//     deleteTask,
//     importantTasks,
//     toggleComplete,
//     searchTasksByTitle,
//     getFilteredTasks,
//     searchQuery,
//     setSearchQuery,
//     view,
//     gridView,
//     darkMode,
//     toggleDarkMode,
//     calculateProgress,
//     getCompletedTasks,
//     getTotalTasks,
//     totalTasks,
//     completedTasks,
//   };
// };

// export default useTaskState;

import { useState } from "react";
import useFetchTasks from "./fetchTasks";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useTaskState = (token,id) => {
  const { tasks, setTasks, loading, error } = useFetchTasks(
    "https://task-manager-api-rm04.onrender.com/task/",{userId:id},
    token
  );
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const gridView = () => {
    setView((prevValue) => !prevValue);
  };

  const openAddTask = () => {
    navigate("create");
  };
  
  const closeModal = () => {
    navigate("/");
  };

  const addTask = (newTask) => {
    setTasks((prevTask) => [...prevTask, newTask]);
  };

  const deleteTask = async (id) => {
    try {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      await axios.delete(`https://task-manager-api-rm04.onrender.com/task/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const toggleComplete = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task._id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const importantTasks = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task._id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const searchTasksByTitle = (query) => {
    setSearchQuery(query);
  };

  const getFilteredTasks = () => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const toggleDarkMode = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  const getTotalTasks = () => tasks.length;

  const getCompletedTasks = () => tasks.filter((task) => task.completed).length;

  const calculateProgress = () => {
    const totalTasks = getTotalTasks();
    const completedTasks = getCompletedTasks();
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  return {
    isOpen,
    openAddTask,
    closeModal,
    tasks,
    addTask,
    deleteTask,
    importantTasks,
    toggleComplete,
    searchTasksByTitle,
    getFilteredTasks,
    searchQuery,
    setSearchQuery,
    view,
    gridView,
    darkMode,
    toggleDarkMode,
    calculateProgress,
    getCompletedTasks,
    getTotalTasks,
    loading,
    error,
  };
};

export default useTaskState;

