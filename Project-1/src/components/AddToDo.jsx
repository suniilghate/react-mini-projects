import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";
import style from './AddToDo.module.css';
import toDoItems  from "../Data/toDoItems"; 

function AddToDo() {
    
    return (
        <div className="container">
            <ToDoForm/>
           <div className={style["items-container"]}>
                {toDoItems.map((item)=>{
                    return(
                        <ToDoItem todoName={item.name} todoDate={item.date} key={item.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default AddToDo;
