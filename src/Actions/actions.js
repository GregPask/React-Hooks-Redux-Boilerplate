// ** ACTIONS =================================================

export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggleTodoAction = (todo) => (dispatch) => {
  dispatch({
    type: "TOGGLE_TODO",
    payload: todo,
  });
};

export const deleteTodoAction = (todo) => ({
  type: "DELETE_TODO",
  payload: todo,
});
