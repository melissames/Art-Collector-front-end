import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchCollections, fetchAllArtworks } from './actions/index.js';
import ArtworkContainer from './components/artworks/ArtworkContainer'
import CollectionContainer from './components/collections/CollectionContainer'
import MoodBoardContainer from './components/moodboards/MoodBoardContainer'
import NavBar from './components/NavBar.js'
import pixelPhoto from './photos/pxl8.png'

class App extends Component {

  componentDidMount() {
    // this.props.getAllCollections()
    this.props.getAllArtworks()
  }

  render() {
    return (
      <div className="App">
        {/* <div className="news"> */}
          <header>
            {/* <div className="nav"> */}
            {/* <NavBar /> */}
            <img src={pixelPhoto} className='center' />

              <ul>
                <Route exact path="/artworks" component={ArtworkContainer} />
                {/* <Route exact path="/collections" component={CollectionContainer} />
                <Route exact path="/pxl8" component={MoodBoardContainer} /> */}
              </ul>
            {/* </div> */}
          </header>
        {/* </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCollections: bindActionCreators(fetchCollections, dispatch),
    getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch)
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
