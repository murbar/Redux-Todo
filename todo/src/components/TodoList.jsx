import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
