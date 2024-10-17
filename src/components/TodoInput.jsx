import { useState } from "react";

export function TodoInput(props) {
    const { handleAddTodo } = props;
    const [inputValue, setInputValue] = useState("");
    
    function keyPress(e) {
        if (e.key === "Enter" && inputValue.trim()) {
            handleAddTodo(inputValue); // Pass the inputValue to handleAddTodo
            setInputValue(""); // Clear the input
        }
    }

    return (
        <div className="input-container">
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyPress={keyPress} // Add onKeyPress handler
                type="text" 
                placeholder="Add Task" 
            />
            <button onClick={() => {
                if (!inputValue) {
                    return;
                } 
                handleAddTodo(inputValue);
                setInputValue("");
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
}
