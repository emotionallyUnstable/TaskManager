import './App.css'
import MyTaskManager from './Components/MyTaskManager'
import MyList from './Components/MyList'
import { useState, useEffect } from 'react'

interface Task {
  text: string;
  completed: boolean;
}


function App() {
const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks])

const [filter, setFilter] = useState<"all" | "active" | "completed"> ("all");



const addTask = (taskText: string) => {
  const t = taskText.trim()
  if (t) {
  setTasks(prev => [...prev, { text: t, completed: false }]);  
  } 
};

const deleteTask = (index: number) => {
  setTasks(prev => prev.filter((_, i) => i !== index))
}

const toggleTask = (index: number) => {
  setTasks(prev =>
    prev.map((task, i) =>
    i === index ? {...task, completed: !task.completed} : task
   )
  )
}

const filteredTasks = tasks.filter(task => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true;
})


  
  return (
    <>
      <MyTaskManager onAddTask={addTask} />
      <MyList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} onFilterChange={setFilter} />
    </>
  )
}

export default App;
