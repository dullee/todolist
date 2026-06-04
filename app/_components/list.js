"use client";
import { useState } from "react";

export const List = () => {
    return(


const [data, setData] = useState(["hihi", "haha"]);
    data.map((task) => (
  <div
      key={task.id}
    className="flex text-black p-4 w-full gap-[10px] bg-[rgba(249,250,251,1)] rounded-md"
  >
    <div className="w-[20px] h-[20px] bg-white border-[rgba(118,118,118,1)] border rounded-xs"></div>
    <div> {task}</div>
  </div>

 ))
);}
