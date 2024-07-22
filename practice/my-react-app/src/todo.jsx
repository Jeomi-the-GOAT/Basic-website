import React, {useState} from 'react';

function Todo(){

    const [tasks, setTasks] = useState(["Eat breakfast","Take a shower", "walk the dog"]);
    const [newtask, setNewtask] = useState("");

    function handlechange(event){
        setNewtask(event.target.value);
    }

    function add(){
        if(newtask.trim() !== ""){
            setTasks(t => [...t, newtask]);
            setNewtask("");
        }
    }

    function deletetask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function moveup(index){
        if(index > 0){
            const Tasks = [...tasks];
            [Tasks[index], Tasks[index - 1]] = [Tasks[index - 1], Tasks[index]];
            setTasks(Tasks);
        }
    }

    function movedown(index){
        if(index < tasks.length - 1){
            const Tasks = [...tasks];
            [Tasks[index], Tasks[index + 1]] = [Tasks[index + 1], Tasks[index]];
            setTasks(Tasks);
        }
    }
    return(
        <>
        <div className="list">
            <h1>To Do list</h1>

            <div>
                <input type="text" placeholder='Enter a Task' value={newtask} onChange={handlechange}/>
                <button className="add" onClick={add}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className='delete' onClick={() => deletetask(index)}>Delete</button>
                    <button className='move' onClick={() => moveup(index)}>Up</button>
                    <button className='move' onClick={() => movedown(index)}>Down</button>
                </li>)}
            </ol>
        </div>
        </>
    )
}

export default Todo