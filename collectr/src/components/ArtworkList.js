import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'

const ArtworksList = props => {

  const mapAllArtworks = () => {
    if(props.loading && !props.submitted){
      let artists = Object.keys(props.allArtworks)
      let artworks = Object.values(props.allArtworks)

      return artworks.map(artworkArray => <ArtworkCard
        key={artworks.indexOf(artworkArray)}
        artist={artists[artworks.indexOf(artworkArray)]}
        artworks={artworkArray}
      />)
      }
  }

  // const mapSubmittedArtworks = () => {
  //   if(props.submitted){
  //     submittedArtistData = Object.values(props.artworkData)[0]
  //
  //     <ArtworkCard
  //       key={submittedArtistData.id}
  //       artist={submittedArtistData.artist.name}
  //       artwork={submittedArtistData.img}
  //     />
  //   }
  // }

  return(
    <div>
      {props.loading && !props.submitted ? mapAllArtworks() : null}
      {/* {props.loading && props.submitted ? mapSubmittedArtworks() : null} */}
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
