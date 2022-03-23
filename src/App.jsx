import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {

    const [tasks, setTasks] = useState([
      {
        id: 1,
        text: "Task 1",
      },
      {
        id: 2,
        text: "Task 2",
      },
      {
        id: 3,
        text: "Task 3",
      },
    ]);

    return (
      <div className="container">
        <Header />
        <Tasks tasks={tasks} />
      </div>
    );
  };

export default App;
