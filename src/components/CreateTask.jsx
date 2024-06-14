import React, { useState } from "react";
import Modal from "./Modal";
import { useModal, useTask, useUserData } from "../context/appContext";
import axios from "axios";

const CreateTask = () => {
  const { closeModal } = useModal();
  const { addTask } = useTask();
  const [newTasks, setNewTasks] = useState({
    title: "",
    desc: "",
    // date: formattedDate,
    important: false,
    completed: false,
  });
  const { token,user } = useUserData();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTasks((prevTask) => {
      return { ...prevTask, [name]: value };
    });
  };
  // const submitTask = (e) => {
  //   e.preventDefault();
  //   addTask(newTasks);
  //   axios
  //     .post("https://task-manager-api-rm04.onrender.com/task", {
  //       title: title,
  //       description: desc,
  //       important:false,
  //       completed:false
  //     },)
  //     .then((res) => {

  //       setIsLoading(false);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       console.log(err);
  //     });
  //   closeModal();
  //   // console.log(note);
  // };
  const submitTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://task-manager-api-rm04.onrender.com/task",
        {
          title: newTasks.title,
          description: newTasks.desc,
          important: false,
          completed: false,
          userId:user._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      addTask(response.data);
      // navigate("/");
      closeModal();
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  return (
    <>
      <Modal closeModal={closeModal}>
        <div className=" w-[34%] relative rounded-lg bg-slate-200 py-6 px-5">
          <div className=" text-xl text-slate-600">Add New Profile</div>
          <form className="flex flex-col">
            <div className="my-4">
              <div>title</div>
              <input
                name="title"
                // value={todo.title}
                onChange={handleChange}
                className="w-full rounded-md py-3 px-4 mt-1"
                placeholder="e.g, study for the test"
                required
              />
            </div>
            <div className="mb-4">
              <div>description</div>
              <textarea
                name="desc"
                // value={todo.desc}
                onChange={handleChange}
                className="mt-1 rounded-md py-3 px-4 w-full"
                placeholder="e.g, study for the test"
              />
            </div>
            <div>
              <div></div>
            </div>

            <button
              onClick={submitTask}
              className="mt-1 rounded-md py-3 px-4 w-full bg-violet-600 text-white"
            >
              Add a task
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateTask;
