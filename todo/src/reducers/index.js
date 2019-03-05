import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

const newTodo = text => {
  return {
    id: Date.now(),
    text,
    completed: false
  };
};

const initialState = {
  todos: [
    {
      id: 1551746276929,
      text: 'Todo 1',
      completed: true
    },
    {
      id: 1551746441772,
      text: 'Todo 2',
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, newTodo(action.text)]
      };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.id) return todo;
          return {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
          };
        })
      };
    default:
      return state;
  }
};
