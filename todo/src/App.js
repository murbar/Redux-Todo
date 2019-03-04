import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodoCompleted } from '../actions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux Todo</h1>
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
