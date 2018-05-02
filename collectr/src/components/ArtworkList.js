import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'

const ArtworksList = props => {

  const mapAllArtworks = () => {
    props.allArtworks.map(artwork => <ArtworkCard key={artwork.id} artwork={artwork}/>)
  }

  // const mapSearchedArtworks = () => {
  //   if(props.submitted){
  //
  //   }
  // }

  return(
    <div>
      {props.loading ? mapAllArtworks() : null}
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
