"use client";
import { useState } from "react";

export default function List() {
  const [data, setData] = useState([
    {
      id: 1,
      text: "task 1",
    },
    { id: 2, text: "task 2" },
    { id: 3, text: "task 2" },
    { id: 4, text: "task 2" },
    { id: 5, text: "task 2" },
    { id: 6, text: "task 2" },
  ]);

  return (
    <div className="flex flex-col w-full gap-2.5">
      {data.map((task) => (
        <div
          className="flex text-black p-4 w-full  bg-[rgba(249,250,251,1)] rounded-md items-center"
          key={task.id}
        >
          <div className="flex flex-row items-center gap-2.5">
            <div className="w-5 h-5 bg-white border-[rgba(118,118,118,1)] border rounded-xs"></div>
            {task.text}
          </div>
        </div>
      ))}
    </div>
  );
  //   data.map((task) => (
  //     <div
  //       key={task.id}
  //       className="flex text-black p-4 w-full gap-[10px] bg-[rgba(249,250,251,1)] rounded-md"
  //     >
  //
  //       <div> {task}</div>
  //     </div>
  //   ));
}
