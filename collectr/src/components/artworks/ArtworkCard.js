import React from 'react';
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ArtworkCard = props => {

  const mapAllArtworkCards = () => {
    if(!props.submitted){
      return props.artworks[0].map(artwork => <Card
        key={artwork.id}
        image={artwork.img}
        header={artwork.artist.name} />)
    }
  }

  const mapSubmittedArtworkCards = () => {
    // if(props.submitted){
      <Card
        key={props.artwork.id}
        image={props.artwork.img}
        header={props.artwork.name} />
    // }
  }

  return (
    <div>
      {props.submitted ? mapSubmittedArtworkCards() : mapAllArtworkCards()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    submitted: state.submitted
  }
}

export default connect(mapStateToProps)(ArtworkCard);
