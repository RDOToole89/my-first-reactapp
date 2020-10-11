import React from "react";
import "./Pokemon.scss";

function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4 pokemon">
      <div className="card-body pb-0">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-primary">
          {props.awesome ? "An Awesome Pokemon!" : "Lame Pokemon"}
        </h6>
        <p className="mb-0">Weight {props.weight} kg</p>
        <p className="mb-0">Awesome: </p>
        <p className="mb-0">Terrifying {props.terrifying ? "very" : "nah cute"}</p>
        <p className="mb-2">Abilities: ({props.abilities.length})</p>
      </div>

      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
    </div>
  );
}

export default Pokemon;
