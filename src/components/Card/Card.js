import React from "react";
import "./card.css";

function Card(props) {
  console.log(props.product.img);
  return (
    <>
      <div className="Card">
        <img src={props.product.img} alt="product"></img>
        <div className="Card-Body">
          <a href="http://www.google.com">{props.product.title}</a>
          <p>{props.product.description}</p>
          <p className="highlighted">Read More »</p>
        </div>

        <div className="card-bottom">
          <span>{props.product.date}</span>
          <span>{props.product.comments}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
