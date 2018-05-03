import React from 'react';
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ArtworkSearchCard = props => {

  const mapSubmittedArtworkCards = () => {
    <Card
        key={props.artwork.id}
        image={props.artwork.img}
        header={props.artwork.name} />
  }

  return (
    <div>
      {mapSubmittedArtworkCards()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    submitted: state.submitted
  }
}

export default connect(mapStateToProps)(ArtworkSearchCard);
