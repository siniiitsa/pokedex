import React from 'react'

import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';

const Pokedex = ({ cards, totalExp, isWinner }) => {
  const pokecards = cards.map(card => <Pokecard key={card.id} data={card} />);
  const message = `${isWinner ? 'Winning' : 'Losing'} hand`;
  const messageClass = isWinner ? 'Pokedex-win-message' : 'Pokedex-lose-message';

  return (
    <div className="Pokedex">
      <h3 className={messageClass}>{message}</h3>
      <p className="Pokedex-total-exp-message">Total EXP: {totalExp}</p>
      <div className="Pokedex-container">
        {pokecards}
      </div>
    </div>
  )
}

export default Pokedex;