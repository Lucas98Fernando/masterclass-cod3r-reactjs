import React, { useState, useEffect } from "react";
import Loading from "./Loading";

export default function PokemonFn() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h3>Listagem dos pokémons</h3>
      {loading && <Loading />}
      <ul>
        {pokemons && pokemons.map((el) => <li key={el.name}>{el.name}</li>)}
      </ul>
    </div>
  );
}
