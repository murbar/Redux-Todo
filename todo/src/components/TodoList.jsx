import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodoCompleted } from '../actions';

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

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTodoCompleted }
)(TodoList);
