export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[rgba(243,244,246,1)] font-sans ">
      <main className="flex  flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 bg-white py-4 px-6 rounded-md shadow-md text-center sm:text-left">
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black text-center">
            To-do list
          </h1>
          <div className=" flex gap-[6px]">
            <input
              id="input"
              className="bg-white text-black border-solid border-1 rounded-md border-[rgba(228,228,231,1)]"
              placeholder="Add a new task..."
            ></input>
            <button className="bg-[rgba(60,130,246,1)] p-1 rounded-md">
              Add
            </button>
          </div>
          <div className="flex gap-[6px] self-start ">
            <button className="bg-[rgba(60,130,246,1)] p-1 rounded-md">
              All
            </button>
            <button className="bg-[rgba(243,244,246,1)] text-[rgba(54,54,54,1)]  p-1 rounded-md">
              Active
            </button>
            <button className="bg-[rgba(243,244,246,1)] text-[rgba(54,54,54,1)] p-1 rounded-md">
              Completed
            </button>
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
