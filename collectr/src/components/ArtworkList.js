import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'

const ArtworksList = props => {
  console.log(props)

  return(
    <div></div>
  )
}

const mapStateToProps = state => {
  return {
    // allArtworks: state.allArtworks,
    artworkData: state.artworkSearch
  }
}

export default connect(mapStateToProps)(ArtworksList);
