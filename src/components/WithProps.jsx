import React from "react";

export default function withParams(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </>
  );
}
