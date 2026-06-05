"use client";
import { useState } from "react";
import List from "./_components/list.js";

export default function Home() {
  const [number, setNumber] = useState(0);
  const handClick = () => {
    setNumber(number + 1);
  };

  const [pressedButton, setPressedButton] = useState("all");
  const pressButton = (button) => {
    setPressedButton(button);
  };

  return (
    <div className="flex flex-col flex-1 items-center bg-[rgba(243,244,246,1)] font-sans ">
      <main className="flex  flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 bg-white py-4 px-6 rounded-md shadow-md text-center sm:text-left">
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black text-center">
            To-do list
          </h1>
          <button onClick={handClick}>add</button>
          <p>{number}</p>
          <div className=" flex gap-1.5">
            <input
              id="input"
              className="bg-white text-black border-solid border  rounded-md border-[rgba(228,228,231,1)]"
              placeholder="Add a new task..."
            ></input>
            <button className="bg-[rgba(60,130,246,1)] p-1 rounded-md">
              Add
            </button>
          </div>
          <div className="flex gap-1.5 self-start ">
            <button
              onClick={() => pressButton("all")}
              className={`p-1 rounded-md px-5 ${pressedButton == "all" ? "bg-[#3c82f6]" : "bg-[#f3f4f6] "}`}
            >
              All
            </button>
            <button
              onClick={() => pressButton("active")}
              className={`p-1 rounded-md px-5 ${pressedButton == "active" ? "bg-[#3c82f6]" : "bg-[#f3f4f6] "}`}
            >
              Active
            </button>
            <button
              onClick={() => pressButton("completed")}
              className={`p-1 rounded-md px-5 ${pressedButton == "completed" ? "bg-[#3c82f6]" : "bg-[#f3f4f6] "}`}
            >
              Completed
            </button>
          </div>
          {false ? (
            <div className="text-[rgba(107,114,128,1)]">
              No tasks yet. Add one above!
            </div>
          ) : (
            <List />
          )}
          <div className="text-[rgba(107,114,128,1)]">
            Powered by
            <span className="text-[rgba(59,115,237,1)]"> Pinecone academy</span>
          </div>
        </div>
      </main>
    </div>
  );
}
// const input = useRef("input");
// const addButton = document.querySelector("button");
// const ul = document.getElementById("ulElement");

// let tasks = [];

// const addTask = () => {
//   if (input.value) {
//     for (let i = 0; i < tasks.length; i++) {
//       tasks[i] == input.value;
//       console.log("task already exists");
//       return;
//     }
//     tasks.push({ task: input.value, completed: false });

//     ul.appendChild;
//     console.log(tasks);
//   }
// };
// addButton.addEventListener("click", addTask);
