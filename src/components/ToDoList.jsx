
export default function ToDoList() {
    const {tasks,addTask}=useToDoStore();

    return (
    <>
    
    <h2>
        To dO liST AVEC 
    </h2>
    <ul>
        {tasks.map((task)=>(
         <li key={task.id}>{task.name}</ li>
        ))}
    </ul>
    <button onClick={()=>addTask(prompt("nouvelle tavhe"))}>ajouter</button>
    </>    



);
}

