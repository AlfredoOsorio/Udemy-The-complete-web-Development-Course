import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("Hello");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading("Hello " + name);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
