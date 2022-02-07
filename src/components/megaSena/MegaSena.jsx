import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./MegaSena.css";

export default function MegaSena(props) {
  const [num, setNum] = useState(Array(props.qtdNumbers).fill(0));
  function generateNumberNoRepeat(arr) {
    // Define max and min values in range
    const newNumber = (Math.random() * (60 - 1) + 1).toFixed(0);
    return arr.includes(newNumber) ? generateNumberNoRepeat(arr) : newNumber;
  }
  function generateArrNumbers() {
    const newArray = Array(props.qtdNumbers)
      .fill(0)
      .reduce((arr) => [...arr, generateNumberNoRepeat(arr)], [])
      .sort((a, b) => a - b);
    setNum(newArray);
  }
  return (
    <div className="megaSena">
      <h2>Mega-Sena</h2>
      <Display num={num.join(" ")} />
      <Button onClickGenerate={generateArrNumbers} />
    </div>
  );
}
