import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>

        <section className="form">
          <form>
            <div>
              <input
                type="text"
                placeholder="Add a new task"
                className="todo-input"
                autoComplete="false"
                value={inputValue}
              />
            </div>
            <button type="submit" className="todo-btn">
              Add task
            </button>
          </form>
        </section>
      </header>
    </section>
  );
};
