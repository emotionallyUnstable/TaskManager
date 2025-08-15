import './App.css'
import MyTaskManager from './Components/MyTaskManager'
import MyList from './Components/MyList'
import { useState } from 'react'

function App() {
const [tasks, setTasks] = useState<string[]>([]);

const addTask = (taskText: string) => {
  if (taskText.trim() !== "" ) {
    setTasks([...tasks, taskText]);
  }
};
  
  return (
    <>
      <MyTaskManager onAddTask={addTask} />
      <MyList tasks={tasks}/>
    </>
  )
}

export default App
