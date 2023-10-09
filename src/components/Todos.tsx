import "./Todos.css"
import {useState} from "react";
type inputs = {name: string , description : string, id: number, filter: void, onEditHandle: void}
const Todos = ({name, description, id, filter, onEditHandle} : inputs) => {
  const [complete, setComplete] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <div className="todo">
        <div className="left">
            <div className={complete == false ? "todo-name": "completed"}>
                {edit == false? <h1>{name}</h1> : <input onChange={(e) => onEditHandle(e.target.value, id)} type="text" /> }
            </div>
            <div className="todo-description">
                {
                  complete == false && description
                }
            </div>
        </div>

       <div className="right">
          <button
            className="edit-button"
            onClick={() => setEdit(!edit)}
          >
            {edit == false ? "Edit" : "Edited"}
          </button>

          <button
            className="complete-button"
            onClick={()=> setComplete(!complete)}
          >
            {complete == false ? "complete" : "undo"}
          </button>

          <button onClick={()=>filter(id)} className="delete-button">Delete</button>
       </div>
    </div>
  )
}

export default Todos