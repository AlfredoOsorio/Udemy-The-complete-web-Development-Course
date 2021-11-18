import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleInputChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  function additem() {
    setItems((items) => [...items, item]);
  }

  console.log(items);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="item"
          onChange={handleInputChange}
          placeholder=""
          value={item}
        />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
