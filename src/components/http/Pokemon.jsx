import React from "react";
import Loading from "./Loading";
import Error from "./Error";
import ShowPokemon from "./ShowPokemon";
import "./Pokemon.css";

export default class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonName: "",
      frontDefault: "",
      isDataLoading: false,
      hasErro: false,
    };
  }
  fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemon: data,
          frontDefault: data.sprites.front_default,
          pokemonName: "",
        });
      })
      .catch(() =>
        this.setState({
          hasErro: true,
        })
      );
  };
  render() {
    const { isDataLoading, hasErro } = this.state;
    let content;
    if (isDataLoading) content = <Loading />;
    if (hasErro) content = <Error />;
    else
      content = (
        <ShowPokemon
          name={this.state.pokemon.name}
          img={this.state.frontDefault}
        />
      );
    return (
      <div className="pokemon">
        <label htmlFor="inputPokemon">
          Informe o nome de um <strong>Pokémon</strong>
        </label>
        <input
          id="inputPokemon"
          type="text"
          value={this.state.pokemonName}
          onChange={(e) => this.setState({ pokemonName: e.target.value })}
        />
        <button className="BgGradient" onClick={this.fetchData}>
          Pesquisar
        </button>
        {content}
      </div>
    );
  }
}
