import React, { createContext, useContext } from "react";
import useTaskState from "../utils/taskState";

const ModalContext = createContext();
const TaskContext = createContext();
const ViewContext = createContext();
const DarkModeContext = createContext();

export const useModal = () => useContext(ModalContext);
export const useTask = () => useContext(TaskContext);
export const useView = () => useContext(ViewContext);
export const useDarkMode = () => useContext(DarkModeContext);
export const AppContext = ({ children }) => {
  const {
    isOpen,
    openModal,
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
    loading,
    error,
  } = useTaskState();

  return (
    <ModalContext.Provider value={{ isOpen, openAddTask, closeModal }}>
      <TaskContext.Provider
        value={{
          tasks,
          addTask,
          deleteTask,
          importantTasks,
          toggleComplete,
          searchTasksByTitle,
          getFilteredTasks,
          searchQuery,
          setSearchQuery,
          loading,
          error,
        }}
      >
        <ViewContext.Provider value={{ view, gridView }}>
          <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
          </DarkModeContext.Provider>
        </ViewContext.Provider>
      </TaskContext.Provider>
    </ModalContext.Provider>
  );
};
