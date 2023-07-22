import {useState} from 'react'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const EditForm = ({currentTask, editTask}) => {

    const [title, setTitle] = useState(currentTask.text)
    const [day, setDay] = useState(new Date())
    const [reminder, setReminder] = useState(currentTask.reminder)
     

    const saveTask = (e) => {
        e.preventDefault();

        if(!title.length){
            alert('Please enter title');
            return;
        }

        editTask({title, day, reminder})

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
                <DatePicker selected={day} onChange={date => setDay(date)} placeholderText="Task date" value={day} />
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

export default EditForm;