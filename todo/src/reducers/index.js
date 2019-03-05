import { ADD_TODO, TOGGLE_TODO } from '../actions';

const newTodo = text => {
  return {
    id: Date.now(),
    text
  };
};

const initialState = {
  todos: [
    {
      id: 1551746276929,
      text: 'Todo 1'
    },
    {
      id: 1551746441772,
      text: 'Todo 2'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, newTodo(action.text)]
      };
    case TOGGLE_TODO:
      return {
        todos: [...state.todos]
      };
    default:
      return state;
  }
};
