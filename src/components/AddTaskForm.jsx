import { useState } from "react";

function AddTaskForm ({ addTask }) {
    const [text, setText] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();        
        if (!text.trim()) return;
        addTask(text);
        setText("")
    };
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text}  
                placeholder="Añadir nueva tarea"  
                onChange={e => setText(e.target.value)} />
            <button type="submit">Agregar</button>
        </form>
        );
}
export default AddTaskForm;