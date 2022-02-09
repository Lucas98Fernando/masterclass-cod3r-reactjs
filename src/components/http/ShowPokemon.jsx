import React from "react";

export default function ShowPokemon(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.img} alt={props.name} />
    </div>
  );
}
