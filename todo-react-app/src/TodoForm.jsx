import { useState } from 'react';

export default function TodoForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevents blank inputs
    onAddTask(text);          // Calls parent app state function
    setText('');              // Wipes input field box clean
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        style={{ padding: '8px', width: '250px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Add Task</button>
    </form>
  );
}
