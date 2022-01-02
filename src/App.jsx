import "./App.css";
import React from "react";

// Components
import First from "./components/Function";
import WithProps from "./components/WithProps";
import WithChildren from "./components/WithChildren";
import Card from "./components/layout/Card";
import Repetition from "./components/Repetition";
import Conditionals from "./components/Conditionals";
import ConditionalsIf from "./components/ConditionalsIf";
import ClassComponent from "./components/Class";

const App = (props) => (
  <div className="App">
    <Card title="#01 - Primeiro exemplo">
      <First />
    </Card>
    <Card title="#02 - Passagem de propriedades">
      <WithProps
        title="Passando props"
        subtitle="Passando dados de um componente para outro"
      />
    </Card>
    <Card title="#03 - Componente com filhos">
      <WithChildren>
        <ul>
          <li>Lucas</li>
          <li>Maria</li>
          <li>Carlos</li>
        </ul>
      </WithChildren>
    </Card>
    <Card title="#04 - Componente com repetição">
      <Repetition />
    </Card>
    <Card title="#05 - Condicionais v1">
      <Conditionals number={10} />
    </Card>
    <Card title="#06 - Condicionais v2 com função">
      <ConditionalsIf number={5} />
    </Card>
    <Card title="#07 - Componente com classe">
      <ClassComponent msg="Exemplo de componente com classe" />
    </Card>
  </div>
);

export default App;
