import React from "react";
import ReactDOM from "react-dom";

const pizzaImg = "https://i-ticketing.iwos.com/256x256-th/products/190/products_190_49.jpg";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img
      className="size100x100"
      alt="Pizza"
      src={pizzaImg}
    ></img>
    <img
      className="size100x100"
      alt="Ramen"
      src="https://www.androidfreeware.net/img2/com-am-ramen.jpg"
    ></img>
    <img
      className="size100x100"
      alt="Fried Chicken"
      src="https://i.pinimg.com/600x315/1a/11/78/1a11787020f87d76c814ea7704216ca2.jpg"
    ></img>
  </div>,
  document.getElementById("root")
);