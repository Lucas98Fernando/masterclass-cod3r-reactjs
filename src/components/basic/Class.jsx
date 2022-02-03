import React from "react";

export default class Home extends React.Component {
  state = {
    subtitle: "Acessando um estado dentro da classe",
  };
  resetSubtitle() {
    this.setState({
      subtitle: "",
    });
  }
  render(props) {
    return (
      <div>
        <h3>{this.props.msg}</h3>
        <p>{this.state.subtitle}</p>
        <input
          type="text"
          value={this.state.subtitle}
          onChange={(e) => this.setState({ subtitle: e.target.value })}
        />
        <button onClick={() => this.resetSubtitle()}>Resetar mensagem</button>
      </div>
    );
  }
}
