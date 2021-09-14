import React from "react";
import ReactDOM from "react-dom";

const myStyle = {
  color: "green",
  fontSize: "100px",
  border: "5px dotted red"
};

ReactDOM.render(
  <h1 style={myStyle}>Hello World!</h1>,
  document.getElementById("root")
);
