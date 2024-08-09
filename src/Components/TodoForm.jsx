import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ name: '', description: '' });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={todo.name} 
        onChange={handleChange} 
        placeholder="Todo Name" 
        required 
      />
      <input 
        type="text" 
        name="description" 
        value={todo.description} 
        onChange={handleChange} 
        placeholder="Todo Description" 
        required 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
