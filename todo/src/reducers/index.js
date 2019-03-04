import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: ['todo 1', 'todo 2']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: []
      };
    case TOGGLE_TODO:
      return {
        todos: []
      };
    default:
      return state;
  }
};
