export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = () => {
  console.log('add');
  return {
    type: ADD_TODO
  };
};

export const toggleTodoCompleted = () => {
  console.log('toggle');
  return {
    type: TOGGLE_TODO
  };
};
