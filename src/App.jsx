import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([])

  function change(e){
    setText(e.target.value)
  }
function addTask() {
    if (text.trim() !== "") {
      setTasks([...tasks, text]);
      setText("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  return (
    <>
    <div id="main">
    <h1>ToDo List</h1>
    <div id='container'>
      <input type="text" name="" id="input" onChange={change} value={text}/>
        <button id='button' onClick={addTask}>Add a task</button>
        </div>
      <div id='div'>
        <ul id='list'>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button id='button' style={{"display":"flex"}}onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </>
  )
}

export default App;
