import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { useState, useEffect } from "react"; // React hooks

function App() {
  const [todos, setTodos] = useState([
    { input: "Learn React", completed: false, timestamp: new Date().toISOString() },
  ]);
  const [deletedTodos, setDeletedTodos] = useState([]); // State for deleted todos
  const [selectedTab, setSelectedTab] = useState("All");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString()); // State for current time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString()); // Update current time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("todo-app");
    const storedDeletedData = localStorage.getItem("deleted-todos");

    if (storedData) {
      let db = JSON.parse(storedData);
      setTodos(db.todos);
    }

    if (storedDeletedData) {
      let deletedDb = JSON.parse(storedDeletedData);
      setDeletedTodos(deletedDb);
    }
  }, []); // Load todos and deleted todos from local storage

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, completed: false, timestamp: new Date().toISOString() }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodoList = [...todos];
    const completedTodo = todos[index];
    completedTodo["completed"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const deletedTodo = todos[index];
    setDeletedTodos((prev) => [...prev, deletedTodo]); // Move todo to deleted list
    const newTodoList = todos.filter((_, valIndex) => valIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList, [...deletedTodos, deletedTodo]); // Save updated todos and deleted todos
  }

  function handleUndeleteTodo(index) {
    const todoToRestore = deletedTodos[index];
    setTodos([...todos, todoToRestore]); // Restore todo to todos
    const newDeletedList = deletedTodos.filter((_, valIndex) => valIndex !== index);
    setDeletedTodos(newDeletedList);
    handleSaveData([...todos, todoToRestore], newDeletedList); // Save updated todos and deleted todos
  }

  function handleUpdateTodo(index, updatedInput) {
    const newTodoList = [...todos];
    newTodoList[index].input = updatedInput; // Update the input value
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currTodos, currDeletedTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
    localStorage.setItem("deleted-todos", JSON.stringify(currDeletedTodos));
  }

  return (
    <>
      <h1>Todo App</h1>
      <p>Amazing Day!</p>
      <h2>Current Time: {currentTime}</h2> {/* Display current date and time */}

      <Header todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
        selectedTab={selectedTab}
        todos={todos}
      />

      <TodoInput handleAddTodo={handleAddTodo} />

      <h2>Deleted Todos</h2>
      <ul>
        {deletedTodos.map((todo, index) => (
          <li key={index}>
            {todo.input} <button onClick={() => handleUndeleteTodo(index)}>Undelete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;



