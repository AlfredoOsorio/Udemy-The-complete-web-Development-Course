import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {name} {lastName}
      </h1>
      <form>
        <input
          onChange={handleNameChange}
          name="fName"
          placeholder="First Name"
          value={name}
        />
        <input
          onChange={handleLastNameChange}
          name="lName"
          placeholder="Last Name"
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
