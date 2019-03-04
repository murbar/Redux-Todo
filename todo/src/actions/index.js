export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = () => ({
  type: ADD_TODO
});

export const toggleTodoCompleted = () => ({
  type: TOGGLE_TODO
});
