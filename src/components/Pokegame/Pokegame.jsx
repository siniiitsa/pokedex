import React from 'react';

import { shuffle } from '../../helpers';
import Pokedex from '../Pokedex/Pokedex';
import './Pokegame.css';

const Pokegame = ({ cards }) => {
  const shuffledCards = shuffle(cards);

  const handOne = shuffledCards.slice(0, cards.length / 2);
  const handTwo = shuffledCards.slice(cards.length / 2);

  const sumExp = (total, card) => card.base_experience + total;
  const handOneTotalExp = handOne.reduce(sumExp, 0);
  const handTwoTotalExp = handTwo.reduce(sumExp, 0);

  return (
    <div className="App">
      <Pokedex cards={handOne} totalExp={handOneTotalExp} isWinner={handOneTotalExp > handTwoTotalExp} />
      <Pokedex cards={handTwo} totalExp={handTwoTotalExp} isWinner={handOneTotalExp < handTwoTotalExp} />
    </div>
  );
}

export default Pokegame;