import { useState } from "react";
import "./TodoApp.css";
import Todos from "./Todos";
const TodoApp = () => {
    type todo = {
        name: string,
        description : string,
        id: number
    }
    const [todoList, setTodoList] = useState<todo[]>([])
    const [todo, setTodo] = useState({
        name: "",
        description: "",
        id: 0
    })

    function onChangeHandler(e : React.ChangeEvent<HTMLInputElement>){
        const name : string = e.target.name;
        setTodo({
            ...todo,
            [name]: e.target.value,
            id: todoList.length+1,
        })
    }

    function onSubmitHandler(){
        if(todo.name.length == 0 && todo.description.length == 0) return;
        setTodoList([...todoList , todo]);
        setTodo({
            name: "",
            description: "",
            id: 0
        })
        console.log(todoList);
    }
    // type a = (id: number) => void;
    function filter  (id: number){
        const reset =  todoList.filter(todo => todo.id != id);
        setTodoList(reset);
    }

    function onEditHandle (value: string, id: number){
        const response = todoList.map((todo) => {
            if(todo.id == id){
                return {
                    ...todo,
                    name: value
                }
            }else{
                return todo
            }
        })
        setTodoList(response)
    }

  return (
    <div className="todo-app">
        
        <h1 className="todo-heading" >My Todos</h1>

        <div className="heading">
           <div className="inputs">
              <div className="name">
                  <div className="title" >Name</div>
                  <div>
                    <input
                       type="text"
                       name="name"
                       onChange={onChangeHandler }
                       value={todo.name}
                     />
                  </div>
               </div>

               <div className="description">
                  <div className="title" >Description</div>
                  <div>
                  <input
                     type="text"
                     name="description"
                     onChange ={onChangeHandler}
                     value={todo.description}
                   />
                  </div>
               </div>
           </div>

            <button
              className="add-button"
              onClick={onSubmitHandler}
            >
                Add Todo
            </button>
        </div>

        <div className="todo-list">
           {
             todoList.map((todo, idx) => (
                <div key={idx}>
                    <Todos name={todo.name} description={todo.description} id={todo.id} filter={filter} onEditHandle={onEditHandle} />
                    <hr />
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default TodoApp