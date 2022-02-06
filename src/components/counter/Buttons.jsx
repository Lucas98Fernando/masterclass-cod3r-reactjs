import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <button onClick={props.onClickDec}>-</button>
      <button onClick={props.onClickInc}>+</button>
    </div>
  );
}
