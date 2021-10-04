import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img className="circle-img" src={props.img} alt={props.imageAlt} />
        </div>
        <div className="bottom">
          <p>{props.phoneNumber}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
