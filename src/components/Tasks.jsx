import Task from './Task'
const Tasks  = ({ tasks, onDelete, onToggle }) => {
    //loop through tasks, outputting component, passing task in as prop
    return (
    <> 
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks