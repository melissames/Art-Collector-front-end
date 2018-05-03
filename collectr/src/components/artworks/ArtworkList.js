import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'

const ArtworksList = props => {

  const mapAllArtworks = () => {
      let artists = Object.keys(props.allArtworks)
      let artworks = Object.values(props.allArtworks)

      return artworks.map(artworkArray => <ArtworkCard
        key={artworks.indexOf(artworkArray)}
        artist={artists[artworks.indexOf(artworkArray)]}
        artworks={artworkArray}
      />)
  }

  const mapSubmittedArtworks = () => {
      let artworks = Object.values(props.artworkData)[0]

      // debugger

      return artworks.map(artwork => <ArtworkCard
        key={artwork.id}
        artist={artwork.artist.name}
        artwork={artwork}
      />)
  }

  return(
    <div>
      {props.submitted ? mapSubmittedArtworks() : mapAllArtworks()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    submitted: state.submitted,
    allArtworks: state.allArtworks,
    artworkData: state.artworkSearch
  }
}

export default connect(mapStateToProps)(ArtworksList);
