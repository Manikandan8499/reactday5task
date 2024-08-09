import { useState } from 'react';
import TodoForm from './Components/TodoForm.jsx';
import TodoFilter from './Components/TodoFilter.jsx';
import TodoList from './Components/TodoList.jsx';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), status: 'Not Completed' }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...updatedTodo, id } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeStatus = (id, status) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status } : todo)));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'Completed';
    if (filter === 'not completed') return todo.status === 'Not Completed';
    return true;
  });

  return (
    <div className="app">
      <h1>My todo</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-section">
        <h2>My Todos</h2>
        <TodoFilter setFilter={setFilter} />
      </div>
      <TodoList 
        todos={filteredTodos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
        changeStatus={changeStatus} 
      />
    </div>
  );
};

export default App;

