import React from 'react';

class NavBar extends React.Component {


  render() {
  return (
    <div>
    <header>
    <div className="news">
        <div className="nav">
          <ul>
            <li className="Artwork"><a href="/artworks" >PXL8</a></li>
            {/* <li className="Collection"><a href="/collections" >Collection</a></li>
            <li className="PXL8"><a href="/pxl8" >PXL8</a></li> */}
          </ul>
        </div>
    </div>
  </header>
</div>
    )
  };
}

export default NavBar
