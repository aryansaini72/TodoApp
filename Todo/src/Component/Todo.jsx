import React, { useState } from "react";

const Todo = () => {
  const [Todo, setTodo] = useState("");
  const [Display, setDisplay] = useState([]);

  function TodoInput(e) {
    e.preventDefault();
    setDisplay([...Display, {Todo}]);
    setTodo("");
  }
  return (
    <div >       
      <form id="form-tag">
        <input
          type="text"
          placeholder="Enter your Todo"
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={TodoInput}>Add</button>
      </form>
      <div>
      {Display.map((Display, input) => (
          <div key={input}>
            <span>{Display.Todo}</span>
          </div>
         ))}
      </div>
      <li className="list-item-update">
        {props.item}
        <span className="icons">
          <i
            onClick={(e) => {
              props.ubdateItem(props.edit);
            }}
          >
            {" "}
            Edit
          </i>
        </span>
      </li>
    </div>
  );
};

export default Todo;
