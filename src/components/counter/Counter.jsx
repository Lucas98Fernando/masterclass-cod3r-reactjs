import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
    step: 0,
  };
  incrementCounter() {
    this.setState({
      counter: +this.state.counter + +this.state.step,
    });
  }
  decrementCounter() {
    this.setState({
      counter: +this.state.counter - +this.state.step,
    });
  }
  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h4>{this.state.counter}</h4>
        <input
          type="text"
          value={this.state.step}
          onChange={(e) => this.setState({ step: e.target.value })}
        />
        <div>
          <button onClick={() => this.decrementCounter()}>-</button>
          <button onClick={() => this.incrementCounter()}>+</button>
        </div>
      </div>
    );
  }
}
