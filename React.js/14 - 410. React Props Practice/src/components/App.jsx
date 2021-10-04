import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        imageAlt={contacts[0].imageAlt}
        phoneNumber={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        imageAlt={contacts[1].imageAlt}
        phoneNumber={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        imageAlt={contacts[2].imageAlt}
        phoneNumber={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
