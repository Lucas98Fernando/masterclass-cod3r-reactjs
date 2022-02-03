import React from "react";

export default function Conditionals(props) {
  return (
    <div>
      <h2>O número {props.number} é</h2>
      {props.number % 2 === 0 ? <span>Par</span> : <span>Ímpar</span>}
    </div>
  );
}
