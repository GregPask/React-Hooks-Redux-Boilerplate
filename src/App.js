import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

import { reducer } from "./Reducer/rootReducer";

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
