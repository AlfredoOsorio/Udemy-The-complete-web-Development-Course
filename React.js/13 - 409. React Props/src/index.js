import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      phoneNumber="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Beatriz"
      img="https://media-exp1.licdn.com/dms/image/C4E03AQE5v8OlhGMNvA/profile-displayphoto-shrink_200_200/0/1613090092381?e=1634774400&v=beta&t=EbgCOk9jU1EE2iW3umqzsy43BGcVKAgIQAuEUusoi_I"
      alt="Beatriz"
      phoneNumber="+34 633 49..."
      email="betyqf@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
