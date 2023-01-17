import {useState} from 'react'; 
const AddForm = ({addTask}) => {

    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const saveTask = (e) => {
        e.preventDefault();
        if(!title.length){
            alert('Please enter title');
            return;
        }

        addTask({title, day, reminder})

        setTitle('');
        setDay('');
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={saveTask}>
            <div className="form-control">
                <label>Task title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Task day</label>
                <input type="text" value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control-check">
                <label>Task reminder</label>
                <input type="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)} />
            </div>

        <div>
            <input type="submit" value="Save Task" className="btn btn-block" />
            </div>
        </form>
    )
}

export default AddForm;