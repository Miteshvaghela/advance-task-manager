import { FaTimes, FaEdit } from 'react-icons/fa'; 

const Task = ({task, toggleMe, deleteMe, updateMe}) => {
    return (
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={() => toggleMe(task.id)}>
            <h3>{task.text} <span className="icons"><FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteMe(task.id)} /> </span> <span className="icons"><FaEdit onClick={() => updateMe(task)}/></span></h3>
            <span>{task.day}</span>
        </div>
    )
}
export default Task;