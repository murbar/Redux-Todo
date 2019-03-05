import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../actions';

const TodoList = ({ todos, toggleTodoCompleted, removeTodo }) => {
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
            <button className="remove" onClick={() => removeTodo(t.id)}>
              X
            </button>
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
  { toggleTodoCompleted, removeTodo }
)(TodoList);
