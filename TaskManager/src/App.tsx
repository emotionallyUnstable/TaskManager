import './App.css'
import MyTaskManager from './Components/MyTaskManager'
import MyList from './Components/MyList'
import { useState } from 'react'

function App() {
const [tasks, setTasks] = useState<string[]>([]);

const addTask = (taskText: string) => {
  const t = taskText.trim()
  if (t) setTasks(prev => [...prev, t])
};

const deleteTask = (index: number) => {
  setTasks(prev => prev.filter((_, i) => i !== index))
}
  
  return (
    <>
      <MyTaskManager onAddTask={addTask} />
      <MyList tasks={tasks} onDelete={deleteTask}/>
    </>
  )
}

export default App
