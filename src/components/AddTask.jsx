import useState from 'react'

const AddTask = () => {
    const [text, SetText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, SetReminder] = useState(false)

  return (
    <form className="add-form">
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e) => SetText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Date & Time</label>
            <input type="text" placeholder="Add Day & Time" />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" />
        </div>
        <input type="submit" value='Save Task' className="btn btn-block"/>
    </form>
  )
}

export default AddTask