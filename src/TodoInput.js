import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "./Actions/actions";
import { v4 as uuidv4 } from "uuid";

const TodoInput = (props) => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch1 = useDispatch();

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
          placeholder="Add an Item"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default TodoInput;
