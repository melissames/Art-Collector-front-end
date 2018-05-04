import React from 'react';

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
