import React, { Component } from "react";
import Display from "./Display";
import StepForm from "./StepForm";
import Buttons from "./Buttons";
import "./Counter.css";

export default class Counter extends Component {
  state = {
    counter: 0,
    step: 0,
  };
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };
  decrementCounter = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };
  changeStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };
  render() {
    return (
      <div className="counter">
        <h2>Contador</h2>
        <StepForm step={this.state.step} onStepChange={this.changeStep} />
        <Display counter={this.state.counter} />
        <Buttons
          onClickInc={this.incrementCounter}
          onClickDec={this.decrementCounter}
        />
      </div>
    );
  }
}
