import React from "react";

export default function withChildren(props) {
  return (
    <>
      <h3>Filhos:</h3>
      <span>{props.children}</span>
    </>
  );
}
