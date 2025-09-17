
interface Task {
  text: string;
  completed: boolean;
}

interface MyListProps {
    tasks: Task[];
    onToggle: (index: number) => void;
    onDelete: (index: number) => void;
    onFilterChange: (filter: "all" | "active" | "completed") => void;
}


function MyList({ tasks, onDelete, onToggle, onFilterChange }:MyListProps) {

 
  return (
    <>

    <div>
       <div className="mt-[20px]">
        <button onClick={() => onFilterChange("all") } className="border-1 py-[0.4em] px-[0.8em] rounded-4xl border-fuchsia-700 text-gray-500 hover:border-fuchsia-400 hover:text-white">All</button>
        <button onClick={() => onFilterChange("active")} className="border-1 py-[0.4em] px-[0.8em] rounded-4xl border-fuchsia-700 text-gray-500 hover:border-fuchsia-400 hover:text-white ml-[20px]">Active</button>
        <button onClick={() => onFilterChange("completed")} className="border-1 py-[0.4em] px-[0.8em]  rounded-4xl border-fuchsia-700 text-gray-500 hover:border-fuchsia-400 hover:text-white">Completed</button>
       </div>
       <div className="flex flex-col mt-[25px] gap-3">
        {tasks.map((task,index) => (

          
            <li key={index} className="flex h-[100px]  max-h-200px overflow-y-auto justify-around items-center gap-4 border-1"><span className="flex-1 max-w-[500px]   break-words">{task.text}</span>
            <input className="w-[20px] h-[20px]" type="checkbox" checked={task.completed} onChange={() => onToggle(index)}  />
            <button onClick={() => onDelete(index)} className="flex text-red-500">❌</button></li>
          
        ))}
       </div>
    </div>
      
    </> 
  )
}

export default MyList;