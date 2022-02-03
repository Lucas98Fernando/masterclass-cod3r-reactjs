import React, { useState } from "react";
import Sub from "./Sub";

export default function SuperFn(props) {
  const [label, setLabel] = useState("Valor");
  const [num, setNum] = useState(0);
  function showMessage(value, text) {
    setNum(value);
    setLabel(text);
  }
  return (
    <div>
      <h3>
        {label} {num}
      </h3>
      <Sub fnProp={showMessage}></Sub>
    </div>
  );
}
