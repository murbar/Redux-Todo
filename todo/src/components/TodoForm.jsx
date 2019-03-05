import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

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

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
