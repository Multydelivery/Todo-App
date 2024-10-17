import React, { useState } from 'react';

export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo, handleUpdateTodo } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.input);

  const handleEdit = () => {
    handleUpdateTodo(todoIndex, editInput);
    setIsEditing(false);
  };

  return (
    <div className="card todo-item">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            value={editInput} 
            onChange={(e) => setEditInput(e.target.value)} 
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.input}
          </p>
          <div className="todo-buttons">
            <button onClick={() => handleCompleteTodo(todoIndex)} disabled={todo.completed}>
              <h4>Done</h4>
            </button>
            <button onClick={() => handleDeleteTodo(todoIndex)}>
              <h4>Delete</h4>
            </button>
            <button onClick={() => setIsEditing(true)}>
              <h4>Edit</h4>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
