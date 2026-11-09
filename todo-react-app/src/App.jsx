import { useState, useEffect } from 'react'; // 1. Added useEffect here
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  // 2. Load initial tasks from local storage, or use defaults if empty
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('my_react_todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      { id: 1, text: 'Learn React fundamentals', completed: false },
      { id: 2, text: 'Submit Week 3 assignment', completed: false }
    ];
  });

  // 3. Automatically save the list to the browser's storage whenever 'todos' changes
  useEffect(() => {
    localStorage.setItem('my_react_todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      <h1>My React To-Do App</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
    </div>
  );
}
