import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import ArtworkContainer from './components/artworks/ArtworkContainer'
import CollectionContainer from './components/collections/CollectionContainer'
import MoodBoardContainer from './components/moodboards/MoodBoardContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="news">
          <header>
            <div className="nav">
              <ul>
                <Route exact path="/artwork" component={ArtworkContainer} />
                <Route exact path="/collection" component={CollectionContainer} />
                <Route exact path="/moodboard" component={MoodBoardContainer} />
              </ul>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
