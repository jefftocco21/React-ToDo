import {useState} from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState(
        [
            {
                id: 1,
                text: 'Task 1',
            },
            {
                id: 2,
                text: 'Task 2'
            },
            {
                id: 3,
                text: 'Task 3'
            }
        ]
    )
    return (
    <>
        {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>)
        )}
    </>
  )
}

export default Tasks