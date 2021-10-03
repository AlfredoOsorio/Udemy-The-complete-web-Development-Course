import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        imageAlt="avatar_img"
        phoneNumber="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Beyonce"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        imageAlt="avatar_img"
        phoneNumber="+123 456 789"
        email="b@beyonce.com"
      />
    </div>
  );
}

export default App;
