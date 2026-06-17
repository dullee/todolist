"use client";

export default function List({ task, onToggle, onDelete }) {
  // Added explicit return statement here!
  return (
    <div className="flex text-black p-4 w-full bg-[rgba(249,250,251,1)] rounded-md items-center justify-between hover:bg-[#f3f4f6]">
      <div className="flex flex-row items-center gap-2.5">
        <input
          type="checkbox"
          onClick={() => onToggle(task.id)}
          className={`cursor-pointer w-5 h-5 border-[#767676] border rounded-xs`}
        ></input>
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="cursor-pointer text-red-600 bg-red-100 rounded-md px-2 py-1.5"
      >
        Delete
      </button>
    </div>
  );
}
