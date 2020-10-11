import React from "react";

function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope not really"}</p>
      <p>Terrifying {props.terrifying ? "very" : "nah cute"}</p>
      <p>Abilities: {props.abilities}</p>
      <ul>
        {props.abilities.map((ability) => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
