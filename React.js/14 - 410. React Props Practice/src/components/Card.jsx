import React from "react";

function Card(props) {
  return (
    <div>
      <div ClassName="card">
        <div ClassName="top">
          <h2>{props.name}</h2>
          <img src={props.image} alt={props.imageAlt} />
        </div>
        <div ClassName="bottom">
          <p>{props.phoneNumber}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

/*
<div>
  <div className="card">
    <div className="top">
      <h2>Beyonce</h2>
      <img
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p>+123 456 789</p>
      <p>b@beyonce.com</p>
    </div>
  </div>
</div>
*/
