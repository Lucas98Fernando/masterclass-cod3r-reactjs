import "./Card.css";
import React from "react";

const card = (props) => (
  <div className="card">
    <div className="title">{props.title}</div>
    <div className="content">{props.children}</div>
  </div>
);

export default card;
