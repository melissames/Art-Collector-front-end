import React from 'react';
import ArtworkSearchCard from './ArtworkSearchCard.js';
import { connect } from 'react-redux'

class ArtworkSearch extends React.Component {

  mapSearchedArtworks = () => {
    let artworks = Object.values(this.props.artworkData)[0]

      return artworks.map(artwork => <ArtworkSearchCard
        key={artwork.id}
        artist={artwork.artist.name}
        artwork={artwork}
      />)

  }
  render(){
    return(
      <div>
        {this.mapSearchedArtworks()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    submitted: state.submitted,
    allArtworks: state.allArtworks,
    artworkData: state.artworkSearch
  }
}

export default connect(mapStateToProps)(ArtworkSearch);
