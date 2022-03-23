import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {

  //static task array
    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Task 1",
        reminder: true
      },
      {
        id: 2,
        text: "Task 2",
        reminder: true
      },
      {
        id: 3,
        text: "Task 3",
        reminder: true
      },
    ]);

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
        <Header />
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No active tasks!'}
      </div>
    );
  };

export default App;
