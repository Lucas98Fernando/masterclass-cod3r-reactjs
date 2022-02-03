import "./Card.css";
import React from "react";

const Card = (props) => (
  <div className="card">
    <div className="title" style={{ backgroundColor: props.color || "#000" }}>
      {props.title}
    </div>
    <div className="content">{props.children}</div>
  </div>
);

export default Card;
