// ** REDUCER =================================================
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todos, index) =>
          todos.id === action.payload
            ? { ...todos, complete: !todos.complete }
            : { ...todos }
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          (todos, index) => todos.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
