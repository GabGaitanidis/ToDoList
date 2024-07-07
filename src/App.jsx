import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "I am a task", prio: "yellow" },
  ]);
  const [value, setValue] = useState("");
  const [prior, setPrio] = useState("");

  function handleAddItem() {
    if (value === "") {
      return;
    }

    const newTask = { id: todos.length + 1, text: value, prio: prior };
    setTodos([...todos, newTask]);
    setValue("");
    setPrio("");
  }

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  function handleDeleteTask(id) {
    setTodos(todos.filter((task) => task.id !== id));
  }

  function handlePriority1() {
    setPrio("yellow");
  }
  function handlePriority2() {
    setPrio("blue");
  }
  function handlePriority3() {
    setPrio("red");
  }

  return (
    <div className="container">
      <h1>MyList</h1>
      <div className="form-container">
        <div className="priority-btns">
          <input
            type="text"
            className="input"
            value={value}
            onChange={handleInputChange}
            placeholder="Task"
          />
          <button onClick={handlePriority1}>Low</button>
          <button onClick={handlePriority2}>Medium</button>
          <button onClick={handlePriority3}>High</button>
        </div>
        <div className="create-btn">
          <button onClick={handleAddItem}>Create</button>
        </div>
      </div>
      <h2>Tasks</h2>

      <div className="task-container">
        {todos.map((task) => (
          <div
            key={task.id}
            className="task"
            style={{ border: `2px solid ${task.prio}` }}
          >
            {task.text}
            <button className="del" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
