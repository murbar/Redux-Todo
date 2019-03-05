import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addTodo, toggleTodoCompleted } from './actions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux to-do list</h1>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   };
// };

// export default connect(
//   mapStateToProps,
//   { addTodo, toggleTodoCompleted }
// )(App);
