import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'

class ArtworksList extends React.Component {

  mapAllArtworks = () => {
      let artists = Object.keys(this.props.allArtworks)
      let artworks = Object.values(this.props.allArtworks)

      return artworks.map(artworkArray => <ArtworkCard
        key={artworks.indexOf(artworkArray)}
        artist={artists[artworks.indexOf(artworkArray)]}
        artworks={artworkArray}
      />)
  }

  render(){
    return(
      <div>
        {!this.props.submitted ? this.mapAllArtworks() : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    submitted: state.submitted,
    allArtworks: state.allArtworks
  }
}

export default connect(mapStateToProps)(ArtworksList);
