import React from "react";

export default function First() {
  return (
    // Utilizando o React.Fragment é possível resolver o problema de tags adjacentes, quando esse código jsx for retornado, ele vai ser gerado diretamente dentro da tag "Pai", que nesse exemplo seria a tag com o id="root"
    <React.Fragment>
      <h1>React JS</h1>
      <h3>Componente React utilizando Função</h3>
    </React.Fragment>
  );
}
