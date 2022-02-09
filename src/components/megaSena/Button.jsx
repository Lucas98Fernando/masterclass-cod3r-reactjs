import React from "react";

export default function Buttons(props) {
  return (
    <button className="BgGradient" onClick={props.onClickGenerate}>
      Gerar número
    </button>
  );
}
