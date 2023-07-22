import {useState, useEffect} from 'react'; 
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import SearchForm from './components/SearchForm';
import About from './components/About';


const App = () => {

  const [showForm, setShowForm] = useState(false); // state is an object that determine and decide how component will render and behave.
  const [showEditForm, setShowEditForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [term, setTerm] = useState('');
  const [currentTask, setCurrentTask] = useState({});
 
  useEffect(() => {  // useEffect to perform side effect in react app 
    const getTasks = async () => {
      const data = await fetchTasks();
      if(term.length > 0){
        setTasks(data.filter(task => task.text.indexOf(term) >= 0))
      }else{
        setTasks(data);
      }
    }
    getTasks();
  });

  const fetchTasks = async () => {
    const allTasks = await fetch('http://localhost:8000/tasks');
    const res = await allTasks.json();
    return res;
  }
 
  const fetchTask = async (id) => {
    const task = await fetch(`http://localhost:8000/tasks/${id}`);
    const res = await task.json(); 
    return res;
  }

  const showAddForm = () => {
      setShowForm(!showForm);
  }

  const deleteMe = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : 'DELETE'
    });
    setTasks(tasks.filter(task => (task.id !== id)));    
  }

  const toggleMe = async (id) => {

    const task = await fetchTask(id);
    task.reminder = !task.reminder;
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method : "PUT",
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(task)
    });

    setTasks(tasks.map(task => (task.id === id)? {...task, reminder: !task.reminder} :task));    
  }

  const addTask = async (obj) => {

    const newTask = {
      id : Math.floor(Math.random() * 1000)+1, 
      text: obj.title, 
      day: obj.day.toLocaleDateString(), 
      reminder: obj.reminder,
    }
    const task1 = await fetch('http://localhost:8000/tasks',{
      method : 'POST',
      headers : {
        'content-type': 'application/json'
      },
      body : JSON.stringify(newTask)
    });
    const res = await task1.json();
    setTasks([...tasks, res]); 

  }

  const searchTerm = async (text) => {

    setTerm(text);

  }
  const editTask = (task) => {    

    setShowForm(false);
    setShowEditForm(true); 
    setCurrentTask(task);      
    console.log(task);
    console.log(task.day);
    
  }

  const updateTask = (task) => {
    console.log('finally update the task.');
  }

  return (
    <div className="container">
      <Header title="Task Manager" showAddForm={showAddForm} showForm={showForm}/>
      {!showForm && !showEditForm && <SearchForm searchTerm={searchTerm}/>}
      {showForm && <AddForm addTask={addTask} />}
      {showEditForm && <EditForm updateTask={updateTask} currentTask={currentTask} />}
      <Tasks tasks={tasks} deleteMe={deleteMe} toggleMe={toggleMe} editTask={editTask}/>
      <About />      
    </div>
  )
}

export default App;