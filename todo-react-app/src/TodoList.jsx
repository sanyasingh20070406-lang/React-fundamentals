import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p style={{ color: '#666' }}>No tasks added yet!</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onToggleTodo={onToggleTodo} 
          onDeleteTodo={onDeleteTodo} 
        />
      ))}
    </ul>
  );
}
