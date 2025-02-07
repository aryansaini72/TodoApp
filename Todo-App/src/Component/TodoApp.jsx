import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage, setTodosPerPage] = useState(5);

  function Todo(e) {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  const startEditTodo = (index) => {
    setEdit(true);
    setEditIndex(index);
    setInput(todos[index]);
  };
  const saveEditTodo = () => {
    if (input && editIndex !== null) {
      let updateTodo = todos.map((todo, i) => (i === editIndex ? input : todo));
      setTodos(updateTodo);
      setEdit(false);
      setEditIndex(null);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    if (index !== null) {
      let delTodo = todos.filter((_, i) => i !== index);
      setTodos(delTodo);
    }
  };


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">Todo App</h1>
        <div className="input-container">
          <input
            type="text"
            value={input}
            placeholder="Add a New Task"
            onChange={(e) => setInput(e.target.value)}
            className="input-box-todo"
          />
          {edit ? (
            <button onClick={saveEditTodo} className="add-btn">
              Save
            </button>
          ) : (
            <button onClick={Todo} className="add-btn">
              Add
            </button>
          )}
        </div>

        <div>
          <h1 className="app-heading"> Todo List</h1> <hr />
          {currentTodos.map((task, index) => (
            <ul key={index} className="list-item">
              <li>{task}</li>
              <li className="btn-click">
                <i
                  onClick={() => startEditTodo(index)}
                  class="fa-solid fa-pen-to-square"
                ></i>
                <i
                  onClick={() => deleteTodo(index)}
                  className="fa-solid fa-trash-can icon-delete"
                ></i>
              </li>
            </ul>
          ))}
        </div>
        <div>
        <ul>
       
      </ul>
      <div className="pragination-btn">
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul></div>
      </div>
    </div>
        </div>
  );
};

export default TodoApp;
