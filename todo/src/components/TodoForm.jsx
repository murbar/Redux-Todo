import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" onChange={handleChange} value={value} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { addTodo }
)(TodoForm);
