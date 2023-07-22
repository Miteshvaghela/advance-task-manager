import Task from './Task';

const Tasks = ({tasks, deleteMe, toggleMe, editTask}) => {
    return (
        <>
        {tasks.length > 0 ?
                tasks.map(task => <Task key={task.id} task={task} deleteMe={deleteMe} toggleMe={toggleMe} editTask={editTask}/>)
            : 'No tasks available'}

        </>
    )
}

export default Tasks;