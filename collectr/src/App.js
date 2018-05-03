import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ArtworkContainer from './components/artworks/ArtworkContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArtworkContainer />
      </div>
    );
  }
}

export default App;
