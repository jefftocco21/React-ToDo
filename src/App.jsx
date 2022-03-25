import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {

    const[showAddTask, setShowAddTask] = useState(false)

    //static task array
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Task 1",
        date: 'Jan 1 at 1:00pm',
        reminder: true
      },
      {
        id: 2,
        text: "Task 2",
        date: 'Jan 2 at 2:00pm',
        reminder: true
      },
      {
        id: 3,
        text: "Task 3",
        date: 'Jan 3 aaaat 3:00pm',
        reminder: true
      },
    ]);

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask =(id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

    return (
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No active tasks!'}
      </div>
    );
  };

export default App;
