import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoCompleted } from '../actions';

const TodoList = ({ todos, toggleTodoCompleted }) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map(t => (
          <li
            className="todo-item"
            key={t.id}
            onClick={() => toggleTodoCompleted(t.id)}
            data-completed={t.completed}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodoCompleted }
)(TodoList);
