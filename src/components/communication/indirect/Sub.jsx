import React from "react";

export default function Sub(props) {
  function invokeFnSuper() {
    props.fnProp(Math.random(), "Valor gerado: ");
  }
  return (
    <div>
      <button onClick={invokeFnSuper}>Alterar</button>
    </div>
  );
}
