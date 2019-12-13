import React, { Component } from 'react';

import Pokegame from './components/Pokegame/Pokegame';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
        { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
        { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
        { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
        { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
        { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
        { id: 94, name: 'Gendar', type: 'poison', base_experience: 255 },
        { id: 133, name: 'Eevee', type: 'normal', base_experience: 75 },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Pokegame cards={this.state.cards} />
      </div>
    )
  }
}

export default App;
