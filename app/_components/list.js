"use client";

export default function List({ task, onToggle, onDelete }) {
  // Added explicit return statement here!
  return (
    <div className="flex text-black p-4 w-full bg-[rgba(249,250,251,1)] rounded-md items-center justify-between">
      <div className="flex flex-row items-center gap-2.5">
        <button
          onClick={() => onToggle(task.id)} // Uses the passed-down onToggle function
          className={`w-5 h-5 ${task?.completed ? "bg-[#42bf29]" : "bg-white"} border-[#767676] border rounded-xs`}
        ></button>
        <span className={task?.completed ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)} // Uses the passed-down onDelete function
        className="text-red-600 bg-red-100 rounded-md px-2 py-1.5"
      >
        Delete
      </button>
    </div>
  );
}
