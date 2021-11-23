import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.newItem} type="text" value={props.newitemValue} />
      <button onClick={props.addNewItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
