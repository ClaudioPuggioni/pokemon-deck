import { useEffect, useState } from "react";
import Card from "./Card";

const List = (props) => {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((resp) => resp.json())
      .then((data) => setAllPokemons(data.results));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="listContainer">
      <div className="listHeader">Pokedex</div>
      <div className="list">
        {allPokemons.map((pokemon) => (
          <Card url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default List;
