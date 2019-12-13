import React from 'react';

import { zeroPad } from '../../helpers';
import './Pokecard.css';

const Pokecard = props => {
  const { id, name, type, base_experience: exp } = props.data;
  const imgURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeroPad(id)}.png`;

  return (
    <div className="Pokecard">
      <h2 className="Pokecard-name">{name}</h2>
      <img className="Pokecard-img" src={imgURL} alt={name} />
      <p className="Pokecard-description">Type: {type}</p>
      <p className="Pokecard-description">EXP: {exp}</p>
    </div>
  )
}

export default Pokecard;