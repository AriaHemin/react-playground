import './index.css';
import Task from "./components/taskComp"
import { useState } from "react";

function App(props) {
  const [taskTitle, setTitle] = useState()

  const [todos , setTodos] = useState([
    {
        task : "add todo tasks",
        key : 0
    },
    {
        task : "get some milk",
        key : 1
    },
    {
        task : "some more give me some more milk",
        key : 2
    }])


  function addTask(taskTitle ){
      let newID =  Math.random() * 100
      let newTask = {
          task: taskTitle,
          key: newID
        }
      setTodos([...todos, newTask])
        console.log(todos)
    }
  return (
    <div className="App">
      <div className='flex flex-wrap justify-center '>
        <div className="flex flex-col">
        <div>
            {
            todos.map((todo)=>{ 

                return( 
                <Task 
                    todo={todo.task} 
                    key={todo.key}/>
            );})}
        </div>   
        <div>
            <span>
                <input className='p-1' onChange={(e)=>{setTitle(e.target.value) ;console.log(taskTitle , e.target.value)}} />
                <button onClick={()=>{
                    addTask(taskTitle)
                    
                }}  > add task </button>
            </span>
            
        </div>     
        </div>
      </div>
    </div>
  );}

export default App;
