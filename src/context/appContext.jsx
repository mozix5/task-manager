import React, { createContext, useContext, useState, useEffect } from "react";
import useTaskState from "../utils/taskState";

const ModalContext = createContext();
const TaskContext = createContext();
const ViewContext = createContext();
const DarkModeContext = createContext();
const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);
export const useModal = () => useContext(ModalContext);
export const useTask = () => useContext(TaskContext);
export const useView = () => useContext(ViewContext);
export const useDarkMode = () => useContext(DarkModeContext);

export const AppContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleUser = (user) => {
    setUser(user);
  };

  const handleToken = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const {
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
    loading,
    error,
    updateTask
  } = useTaskState(token,user._id);

  return (
    <UserDataContext.Provider value={{ handleUser, handleToken, user, token }}>
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
            updateTask
          }}
        >
          <ViewContext.Provider value={{ view, gridView }}>
            <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
              {children}
            </DarkModeContext.Provider>
          </ViewContext.Provider>
        </TaskContext.Provider>
      </ModalContext.Provider>
    </UserDataContext.Provider>
  );
};
