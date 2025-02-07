import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return alert("please write some task");

    setTasks([...tasks, inputValue]);

    if (tasks.includes(inputValue)) {
      //   alert("Task already exists");
      setInputValue("");
      return;
    }

    if (inputValue) {
      setInputValue("");
    }
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                placeholder="Add a new task"
                className="todo-input"
                autoComplete="false"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <button type="submit" className="todo-btn">
              Add task
            </button>
          </form>
        </section>
        <section className="myUnOrdList">
          <ul>
          task.map((curTask, index) => {
            return <li key={index}> {curTask} </li>;
          });
          </ul>
        </section>
      </header>
    </section>
  );
};
