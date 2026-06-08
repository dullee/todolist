"use client";
import { useState } from "react";
import List from "./_components/list.js";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const changeFilter = (e) => {
    setFilter(e);
  };

  const [inputValue, setInputValue] = useState("");

  const [data, setData] = useState([
    { id: 1, text: "task 1", completed: true },
  ]);

  const addTask = () => {
    if (!inputValue.trim()) return;

    const newTask = { id: Date.now(), text: inputValue, completed: false };
    setData([...data, newTask]);
  };

  const removeTask = (taskId) => {
    console.log(data.includes);

    const updatedTasks = data.filter((task) => task.id !== taskId);

    setData(updatedTasks);
  };

  const test = () => {
    console.log(data);
  };
  const filteredTasks = data?.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <div className="flex flex-col flex-1 items-center bg-[rgba(243,244,246,1)] font-sans ">
      <main className="flex  flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 bg-white py-4 px-6 rounded-md shadow-md text-center sm:text-left">
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black text-center">
            To-do list
          </h1>
          <button onClick={() => test()}>Test</button>
          <div className=" flex gap-1.5">
            <input
              id="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-white text-black border-solid border  rounded-md border-[rgba(228,228,231,1)]"
              placeholder="Add a new task..."
            ></input>
            <button
              onClick={() => {
                addTask();
                setInputValue("");
              }}
              className="bg-[rgba(60,130,246,1)] p-1 rounded-md"
            >
              Add
            </button>
          </div>
          <div className="flex gap-1.5 self-start ">
            <button
              onClick={() => changeFilter("all")}
              className={`p-1 rounded-md px-5 ${filter == "all" ? "bg-[#3c82f6]" : "bg-[#f3f4f6] "}`}
            >
              All
            </button>
            <button
              onClick={() => changeFilter("active")}
              className={`p-1 rounded-md px-5 ${filter == "active" ? "bg-[#3c82f6]" : "bg-[#f3f4f6] "}`}
            >
              Active
            </button>
            <button
              onClick={() => changeFilter("completed")}
              className={`p-1 rounded-md px-5 ${filter == "completed" ? "bg-[#3c82f6]" : "bg-[#f3f4f6] "}`}
            >
              Completed
            </button>
          </div>
          {!data.length ? (
            <div className="text-[rgba(107,114,128,1)]">
              No tasks yet. Add one above!
            </div>
          ) : (
            <div className="flex flex-col w-full gap-2.5">
              {filteredTasks?.map((task) => (
                <div
                  className="flex text-black p-4 w-full  bg-[rgba(249,250,251,1)]  rounded-md items-center justify-between"
                  key={task.id}
                >
                  <div className="flex flex-row items-center gap-2.5">
                    <div
                      className={`w-5 h-5  ${task?.completed ? "bg-[#42bf29]" : "bg-white"} border-[#767676] border rounded-xs`}
                    ></div>
                    {task.text}
                  </div>
                  <button
                    onClick={() => removeTask(task.id)}
                    className="text-red-600 bg-red-100 rounded-md px-2 px-1.5"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
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
