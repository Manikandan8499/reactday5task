import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos, updateTodo, deleteTodo, changeStatus }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo} 
          changeStatus={changeStatus} 
        />
      ))}
    </div>
  );
};

export default TodoList;