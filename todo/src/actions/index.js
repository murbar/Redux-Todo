export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = text => {
  console.log('add', text);
  return {
    type: ADD_TODO,
    text
  };
};

export const toggleTodoCompleted = id => {
  console.log('toggle', id);
  return {
    type: TOGGLE_TODO,
    id
  };
};
