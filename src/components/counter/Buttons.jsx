import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <button className="BgGradient" onClick={props.onClickDec}>
        -
      </button>
      <button className="BgGradient" onClick={props.onClickInc}>
        +
      </button>
    </div>
  );
}
