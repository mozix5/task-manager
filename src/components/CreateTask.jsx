import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useModal, useTask, useUserData } from "../context/appContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateTask = () => {
  const { closeModal } = useModal();
  const { addTask, updateTask, tasks } = useTask();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    important: false,
    completed: false,
  });
  const { token, user } = useUserData();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const taskToEdit = tasks.find((task) => task._id === id);
      if (taskToEdit) {
        setNewTask(taskToEdit);
      }
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  };

  const submitTask = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (id) {
        response = await axios.put(
          `https://task-manager-api-rm04.onrender.com/task/${id}`,
          {
            title: newTask.title,
            description: newTask.description,
            important: newTask.important,
            completed: newTask.completed,
            userId: user._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        updateTask(newTask);
      } else {
        response = await axios.post(
          "https://task-manager-api-rm04.onrender.com/task",
          {
            title: newTask.title,
            description: newTask.description,
            important: false,
            completed: false,
            userId: user._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        addTask(response.data);
      }

      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Modal closeModal={closeModal}>
        <div className="w-[34%] relative rounded-lg bg-slate-200 py-6 px-5">
          <div className="text-xl text-slate-600">{id ? "Edit Task" : "Add New Task"}</div>
          <form className="flex flex-col" onSubmit={submitTask}>
            <div className="my-4">
              <div>Title</div>
              <input
                name="title"
                value={newTask.title}
                onChange={handleChange}
                className="w-full rounded-md py-3 px-4 mt-1"
                placeholder="e.g., study for the test"
                required
              />
            </div>
            <div className="mb-4">
              <div>Description</div>
              <textarea
                name="description"
                value={newTask.description}
                onChange={handleChange}
                className="mt-1 rounded-md py-3 px-4 w-full"
                placeholder="e.g., study for the test"
              />
            </div>
            <button
              type="submit"
              className="mt-1 rounded-md py-3 px-4 w-full bg-violet-600 text-white"
            >
              {id ? "Update Task" : "Add Task"}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateTask;
