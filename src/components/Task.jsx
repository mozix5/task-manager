import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RxCalendar } from "react-icons/rx";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useModal, useTask, useView } from "../context/appContext";

const Task = (props) => {
  const { deleteTask, importantTasks, toggleComplete } = useTask();
  const bgCol = props.important ? "text-black" : "text-white";
  const { view } = useView();
  const { openModal } = useModal();

  return (
    <div
      className={`bg-violet-600  rounded-lg p-3 sm:p-4 text-white flex hover:shadow-lg hover:shadow-slate-300 dark:hover:shadow-slate-700 ${
        view ? "flex-row h-32" : "flex-col h-52 sm:h-64"
      }`}
    >
      <div className="flex-1 flex flex-col justify-between ">
        <div className="">
          <div>{props.title}</div>
          <div className="mt-1 text-slate-300">{props.desc}</div>
        </div>
        <div className="flex justify-start gap-3 items-center mt-5 ">
          <RxCalendar className="text-xl" />
          <div>{props.date}</div>
        </div>
      </div>
      <div
        className={`border-slate-400  mt-4 ${
          view ? "" : "border-dashed border-t-2"
        }`}
      >
        <div className="mt-4 flex ">
          <div className="flex-1 mr-4">
            <button
              onClick={() => {
                return toggleComplete(props.id);
              }}
              className={` ${
                props.completed
                  ? "bg-emerald-200 text-emerald-800"
                  : " bg-yellow-300 text-yellow-700"
              }  rounded-full font-medium px-3 py-1`}
            >
              {" "}
              {props.completed ? "completed" : "uncompleted"}
            </button>
          </div>

          <div className={`flex justify-center items-center  text-2xl gap-2`}>
            <button>
              {props.important ? (
                <AiFillStar
                  onClick={() => {
                    return importantTasks(props.id);
                  }}
                  className=" text-red-500"
                />
              ) : (
                <AiOutlineStar
                  className={` ${bgCol} transition  dark:hover:text-slate-200 hover:text-slate-700 `}
                  onClick={() => {
                    return importantTasks(props.id);
                  }}
                />
              )}
            </button>
            <button className="ml-1">
              <RiDeleteBin6Fill
                onClick={() => {
                  return deleteTask(props.id);
                }}
                className="hover:text-slate-700"
              />
            </button>
            <button>
              <BsThreeDotsVertical
                className="hover:text-slate-700"
                // onClick={openModal}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
