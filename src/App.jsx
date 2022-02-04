import "./App.css";
import React from "react";

// Components
import First from "./components/basic/Function";
import WithProps from "./components/basic/WithProps";
import WithChildren from "./components/basic/WithChildren";
import Card from "./components/layout/Card";
import Repetition from "./components/basic/Repetition";
import Conditionals from "./components/basic/Conditionals";
import ConditionalsIf from "./components/basic/ConditionalsIf";
import ClassComponent from "./components/basic/Class";
import Father from "./components/communication/direct/Father";
import Super from "./components/communication/indirect/Super";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";

const App = (props) => (
  // props are read only
  <div className="App">
    <div>
      <img src="logo192.png" alt="Logo" width={80} />
      <h1>Fundamentos React JS</h1>
    </div>
    <div className="Cards">
      <Card title="#11 - Contador">
        <Counter />
      </Card>
      <Card title="#10 - Input">
        <Input />
      </Card>
      <Card title="#09 - Comunicação indireta">
        <Super />
      </Card>
      <Card title="#08 - Comunicação direta">
        <Father surname="Silva" />
      </Card>
      <Card title="#07 - Componente com classe">
        <ClassComponent msg="Exemplo de componente com classe" />
      </Card>
      <Card title="#06 - Condicionais v2 com função">
        <ConditionalsIf number={5} />
      </Card>
      <Card title="#05 - Condicionais v1">
        <Conditionals number={10} />
      </Card>
      <Card title="#04 - Componente com repetição">
        <Repetition />
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
      <Card title="#02 - Passagem de propriedades">
        <WithProps
          title="Passando props"
          subtitle="Passando dados de um componente para outro"
        />
      </Card>
      <Card title="#01 - Primeiro exemplo" color="#ee9b00">
        <First />
      </Card>
    </div>
  </div>
);

export default App;
