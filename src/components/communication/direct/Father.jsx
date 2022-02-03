import React from "react";
import Son from "./Son";

export default function Father(props) {
  return (
    <div>
      <h3>Componente pai</h3>
      <Son {...props}>Lucas</Son>
      <Son surname={props.surname}>Ana</Son>
      <Son surname="Freitas">Mateus</Son>
    </div>
  );
}
