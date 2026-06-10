"use client";
import { nanoid } from "nanoid";
import { useState } from "react";
import List from "./_components/list.js";
import Alert from "./_components/alert.js";

export default function Home() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([
    { id: nanoid(), text: "task 1", completed: true },
  ]);

  const changeFilter = (filterString) => {
    setFilter(filterString);
  };

  const addTask = () => {
    if (!inputValue.trim()) return;
    const newTask = { id: nanoid(), text: inputValue, completed: false };
    setData([...data, newTask]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = data.filter((task) => task.id !== taskId);
    setData(updatedTasks);
  };

  const toggleComplete = (taskId) => {
    const updatedTasks = data.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setData(updatedTasks);
  };

  const getCompletedTasks = (tasks) => {
    const completedTasks = tasks.filter((task) => task.completed);
    return completedTasks.length;
  };

  const removeCompletedTasks = () => {
    const nonCompletedTasks = data.filter((task) => !task.completed);
    setData(nonCompletedTasks);
    setAlertVisible(false);
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
      <main className="flex  flex-col items-center justify-between pt-[60px] sm:items-start">
        <div className="flex flex-col items-center  bg-white px-4 py-6 rounded-md shadow-md text-center sm:text-left w-[377px]">
          <h1 className="max-w-xs text-xl font-semibold font-mono leading-10 mb-5 tracking-tight text-black text-center">
            To-do list
          </h1>
          {/* <button onClick={() => test()}>Test</button> */}
          <div className=" flex gap-1.5 w-full h-[40px]">
            <input
              id="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-white text-black border-solid border rounded-md border-[rgba(228,228,231,1)] flex-1 px-3"
              placeholder="Add a new task..."
            ></input>
            <button
              onClick={() => {
                addTask();
                setInputValue("");
              }}
              className="cursor-pointer bg-[rgba(60,130,246,1)] p-1 rounded-md w-[59px] text-white"
            >
              Add
            </button>
          </div>
          <div className="flex gap-1.5 font-medium self-start h-[32px] my-[20px] text-xs">
            <button
              onClick={() => changeFilter("all")}
              className={`cursor-pointer rounded-md px-3 ${filter == "all" ? "bg-[#3c82f6] text-white" : "bg-[#f3f4f6] "}`}
            >
              All
            </button>
            <button
              onClick={() => changeFilter("active")}
              className={`cursor-pointer rounded-md px-3 ${filter == "active" ? "bg-[#3c82f6] text-white" : "bg-[#f3f4f6] "}`}
            >
              Active
            </button>
            <button
              onClick={() => changeFilter("completed")}
              className={`cursor-pointer rounded-md px-3 ${filter == "completed" ? "bg-[#3c82f6] text-white" : "bg-[#f3f4f6] "}`}
            >
              Completed
            </button>
          </div>
          {!data.length ? (
            <div className="text-[rgba(107,114,128,1)]">
              No tasks yet. Add one above!
            </div>
          ) : (
            <div className="flex flex-col w-full gap-2.5 ">
              {filteredTasks?.map((task) => (
                <List
                  key={task.id}
                  task={task}
                  onToggle={toggleComplete}
                  onDelete={removeTask}
                />
              ))}{" "}
              <hr className="mt-3 text-gray-200"></hr>
              <div className="flex justify-between flex-row mb-10">
                <div className="text-base font-medium text-[#6b7280]">
                  {filteredTasks.length} of {getCompletedTasks(filteredTasks)}{" "}
                  tasks completed
                </div>
                <button
                  onClick={() => setAlertVisible(true)}
                  className="cursor-pointer text-red-600"
                >
                  Clear completed
                </button>
              </div>
            </div>
          )}

          {alertVisible ? (
            <Alert onUserConfirmed={removeCompletedTasks} />
          ) : null}

          <div className="text-[rgba(107,114,128,1)] text-xs">
            Powered by
            <span className="text-[rgba(59,115,237,1)]"> Pinecone academy</span>
          </div>
        </div>
      </main>
    </div>
  );
}
