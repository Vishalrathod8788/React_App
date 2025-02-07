import { useState } from "react";
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (tasks.includes(inputValue)) {
      alert("Task already exists");
      setInputValue("");
      return;
    }

    setTasks([...tasks, inputValue]);

    if (inputValue) {
      setInputValue("");
    }
  };

  //Todo - Add date and time

  setInterval(() => {
    const date = new Date();
    const formatedDate = date.toLocaleDateString();
    const formatedTime = date.toLocaleTimeString();

    setDateTime(`${formatedDate} - ${formatedTime}`);
  }, 1000);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
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
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              <span>{task}</span>
              <button
                style={{
                  backgroundColor: "#f2f3f4",
                }}
              >
                <MdCheck className="check-btn" />
              </button>
              <button style={{ backgroundColor: "#f2f3f4" }}>
                <MdDeleteForever className="delete-btn" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};
