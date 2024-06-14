import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";

const ViewToggle = ({ view, gridView }) => {
  const selectedView = view ? "text-violet-600" : "text-slate-400";
  const nonSelectedView = view ? "text-slate-400" : "text-violet-600";

  return (
    <div className="flex gap-2 my-8">
      <button onClick={gridView} disabled={view}>
        <AiOutlineUnorderedList
          className={`text-2xl font-medium ${selectedView}`}
        />
      </button>
      <button onClick={gridView} disabled={!view}>
        <CiGrid41 className={`text-2xl font-medium ${nonSelectedView}`} />
      </button>
    </div>
  );
};

export default ViewToggle;
