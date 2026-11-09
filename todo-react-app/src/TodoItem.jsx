export default function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '8px', 
      borderBottom: '1px solid #eee',
      width: '320px'
    }}>
      <span 
        onClick={() => onToggleTodo(todo.id)}
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none', 
          cursor: 'pointer',
          color: todo.completed ? '#888' : '#000'
        }}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDeleteTodo(todo.id)}
        style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '4px 8px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </li>
  );
}
