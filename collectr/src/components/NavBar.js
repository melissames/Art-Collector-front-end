import React, { Component } from 'react';
import { connect }  from 'react-redux';
// import * as actions from "../actions/index";
import { Link } from 'react-router-dom';
// import { Container, Image, Menu, Button, Label } from 'semantic-ui-react';
import ArtworkContainer from './artworks/ArtworkContainer.js'
import CollectionContainer from './collections/CollectionContainer.js'
import MoodBoardContainer from './moodboards/MoodBoardContainer.js'

class NavBar extends React.Component {


  render() {
  return (
    <div className="news">
      <header>
        <div className="nav">
          <ul>
            <li className="Artwork"><a href="/artwork" >Artwork</a></li>
            <li className="Collection"><a href="/collection" >Collection</a></li>
            <li className="MoodBoard"><a href="/moodboard" >MoodBoard</a></li>
          </ul>
        </div>
      </header>
    </div>
    )
  };
}

export default NavBar
