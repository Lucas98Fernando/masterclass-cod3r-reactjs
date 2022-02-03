import React from "react";

export default function Son(props) {
  return (
    <div>
      <p>
        {props.children} {props.surname}
      </p>
    </div>
  );
}
