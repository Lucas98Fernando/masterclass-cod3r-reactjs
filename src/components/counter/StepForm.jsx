import React from "react";

export default function stepForm(props) {
  return (
    <div>
      <label htmlFor="stepInput">Passo: </label>
      <input
        id="stepInput"
        type="number"
        value={props.step}
        onChange={(e) => props.onStepChange(+e.target.value)}
      />
    </div>
  );
}
