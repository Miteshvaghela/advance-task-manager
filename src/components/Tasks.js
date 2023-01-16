import React from 'react';
 
import Task from './Task';

const Tasks = ({tasks, deleteMe, toggleMe, updateMe}) => {
    return (
        <>
        {tasks.length > 0 ?
                tasks.map(task => <Task key={task.id} task={task} deleteMe={deleteMe} toggleMe={toggleMe} updateMe={updateMe}/>)
            : 'No tasks available'}

        </>
    )
}

export default Tasks;