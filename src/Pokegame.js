import React from "react";
import Pokedex from "./Pokedex";

function Pokegame(props) {
  let player1 = [];
  let player2 = [...props.pokemon];

  while (player1.length < player2.length) {
    // random pokemon from player 2 and add it to player 1
    let randIdx = Math.floor(Math.random() * player2.length);
    let randPokemon = player2.splice(randIdx, 1)[0];
    player1.push(randPokemon);
  }

  let exp1 = player1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = player2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={player1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={player2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

Pokegame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62, key: 1 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63, key: 2 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72, key: 3 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178, key: 4 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112, key: 5 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95, key: 6 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225, key: 7 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65, key: 8 }
  ]
};

export default Pokegame;
