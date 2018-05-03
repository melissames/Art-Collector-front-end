import React, { Component } from 'react';
import { connect }  from 'react-redux';
// import * as actions from "../actions/index";
import { Link } from 'react-router-dom';
// import { Container, Image, Menu, Button, Label } from 'semantic-ui-react';

class NavBar extends React.Component {


  render() {
  return (
        <div>
          <body class="news">
            <header>
              <div class="nav">
                <ul>
                  {/* <li class="Artwork"><a href="#">Home</a></li> */}
                  <li className="Artwork"><a href="/artwork">Artwork</a></li>
                  <li className="Collections"><a href="/collections">Collections</a></li>
                  <li className="MoodBoards"><a href="/moodboards">MoodBoards</a></li>
                </ul>
              </div>
            </header>
          </body>
      </div>
    )
  };
}

export default NavBar
