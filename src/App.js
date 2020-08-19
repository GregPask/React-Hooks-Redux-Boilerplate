import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import "./App.css";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "Learn React Hooks",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "Sync to Redux",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "Have a coffee",
      complete: false,
    },
  ],
};

// ** REDUCER =================================================
const reducer = (state, action) => {
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

// ** ACTIONS =================================================

export const addTodoAction = (todo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: todo,
  });
};

export const toggleTodoAction = (todo) => (dispatch) => {
  console.log("ACTIONS:", todo);

  dispatch({
    type: "TOGGLE_TODO",
    payload: todo,
  });
};

export const deleteTodoAction = (todo) => {
  console.log("DELETE ACTION:", todo);

  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};

// ** STORE =================================================

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}
