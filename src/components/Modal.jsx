import React from "react";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-0 overflow-y-auto h-full w-full z-20 flex justify-center items-center">
      <div
        className="fixed inset-0 w-full h-full bg-slate-600 opacity-20"
        onClick={closeModal}
      ></div>
      {children}
    </div>
  );
};

export default Modal;
