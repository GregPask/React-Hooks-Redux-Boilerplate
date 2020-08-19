import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import { toggleTodoAction, deleteTodoAction } from "./App";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

  return (
    <ul id="todo-list">
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <input
            autoComplete="off"
            type="checkbox"
            checked={todo.complete}
            onChange={toggleTodo.bind(this, todo.id)}
            name=""
            id=""
          />

          <span className={todo.complete ? "complete" : null}>{todo.name}</span>

          <span
            style={{ marginLeft: "10px" }}
            className="delete"
            onClick={deleteTodo.bind(this, todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
