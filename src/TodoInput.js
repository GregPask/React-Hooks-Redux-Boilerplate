import React, { Component, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "./App";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoInput = (props) => {
  const [todo, setTodo] = useState("");

  const dispatch1 = useDispatch();
  const todos = useSelector((state) => state.todos);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let data = {
      id: uuidv4(),
      name: todo,
      complete: false,
    };

    dispatch1(addTodoAction(data));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default TodoInput;
