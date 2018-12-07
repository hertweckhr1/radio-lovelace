import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false; // favorite prop is now set
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state.songData = songData
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={this.state.songData} />
        </main>
      </div>
    );
  }
}

export default App;
