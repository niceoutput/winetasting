import React, { Component } from 'react';
import './App.css';
import Mainflavour from './components/Mainflavour';
import Flavours from './data/flavours';

class App extends Component {
  render() {
    const mainFlavours = Object.keys(Flavours);
    const principalFlavours = mainFlavours.map((flavour, index) => <Mainflavour key={index} title={flavour} />)

    return (
      <div className="App">
        {principalFlavours}
      </div>
    )
  }
}

export default App;
