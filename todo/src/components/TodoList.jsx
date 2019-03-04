import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(t => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
