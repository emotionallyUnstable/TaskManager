import { useState } from "react";


interface MyTaskManagerProps {
    onAddTask: (taskText: string) => void
}


function MyTaskManager({ onAddTask }: MyTaskManagerProps) {
const [inputTask, setInputTask] = useState("")

 const handleClick = () => {
  console.log("handleClick:", inputTask);
    onAddTask(inputTask);
    setInputTask("")
 }

 const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };


  return (
    <>

    <div className="">
        <h1 className="mb-[50px]">Daily Task Manager</h1>
        <div className="flex justify-center gap-4">
            <input onKeyDown={handleKeyPress} value={inputTask} onChange={(e) => setInputTask(e.target.value)}  className="border-1 py-[0.6em] px-[1.2em] text-gray-500 border-fuchsia-700 hover:border-fuchsia-400 hover:text-white rounded-2xl w-[300px]" type="text" placeholder="Type your task here..." />
            <button onClick={handleClick} className="border-1 py-[0.6em] px-[1.2em] text-gray-500 border-fuchsia-700 hover:border-fuchsia-400 hover:text-white rounded-2xl">Add</button>
        </div>
    </div>
      
    </>
  )
}

export default MyTaskManager;