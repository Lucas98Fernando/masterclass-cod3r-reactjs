import React from "react";

export default function WithChildren(props) {
  return (
    <>
      <h3>Filhos:</h3>
      <span>{props.children}</span>
    </>
  );
}
