import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodoCompleted } from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
        <TodoForm />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodoCompleted }
)(App);
