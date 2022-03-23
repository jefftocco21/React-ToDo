import {FaTimes} from 'react-icons/fa'

const task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 
        'reminder' : ''}`} 
        onDoubleClick={() => onToggle(task.id)}
    >
        <h3>{task.text} <FaTimes style={{ color: 'steelblue', cursor: 'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
    </div>
  )
}

export default task