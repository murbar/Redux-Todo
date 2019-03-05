import React from 'react';

const TodoForm = props => {
  console.log(props);
  return (
    <div className="todo-list">
      <form onSubmit={props.addTodo}>
        <input type="text" name="todo" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
