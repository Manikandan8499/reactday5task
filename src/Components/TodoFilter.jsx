const TodoFilter = ({ setFilter }) => {
    return (
      <div className="todo-filter">
        <label>
          Status Filter:
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </label>
      </div>
    );
  };
  
  export default TodoFilter;