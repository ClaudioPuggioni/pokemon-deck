import { useEffect, useState } from "react";

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <div className="card">
      {pokemon && (
        <>
          <div className="dexNum">{pokemon.id}</div>
          <div className="name">{pokemon.name}</div>
          <div className="imageDiv">
            <img src={pokemon.sprites[`front_default`]} alt="" />
            <div className="type">
              {pokemon.types.map((ele) => (
                <div>{ele.type.name}</div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
