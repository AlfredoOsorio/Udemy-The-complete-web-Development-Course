import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMousedOver, setMousedOver] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function turnButtonBlack() {
    setMousedOver(true);
  }

  function turnButtonWhite() {
    setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={turnButtonBlack}
        onMouseOut={turnButtonWhite}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
