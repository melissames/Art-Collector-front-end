import React from 'react';
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ArtworkCard = props => {

  const mapAllArtworkCards = () => {
    if(props.loading && !props.submitted){
      // debugger
      return props.artworks[0].map(artwork => <Card image={artwork.img} header={props.artist.name} />)
    }
  }

  const mapSubmittedArtworkCards = () => {
    if(props.submitted){
      debugger
    }
  }

  return (
    <div>
      {props.loading && !props.submitted ? mapAllArtworkCards() : null}
      {props.submitted ? mapSubmittedArtworkCards() : null}
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
