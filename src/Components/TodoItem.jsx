import { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo, changeStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({ ...updatedTodo, [name]: value });
  };

  const handleUpdate = () => {
    updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  };

  return (
    <div className="todo-card">
      {isEditing ? (
        <div>
          <input 
            type="text" 
            name="name" 
            value={updatedTodo.name} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="description" 
            value={updatedTodo.description} 
            onChange={handleChange} 
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {todo.name}</p>
          <p><strong>Description:</strong> {todo.description}</p>
          <p><strong>Status:</strong>
            <select 
              value={todo.status} 
              onChange={(e) => changeStatus(todo.id, e.target.value)}
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
