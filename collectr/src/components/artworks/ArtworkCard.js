import React from 'react';
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ArtworkCard = props => {

  // const mapAllArtists = () => {
  //   // return props.artist
  //   if(props.loading){
  //
  //     debugger
  //   }
  //
  //   // return props.artworks[0].map(artwork => <Card
  //   //   key={artwork.id}
  //   //   image={artwork.img} />)
  // }

  return (
    <div>
      {<Card
          key={props.id}
          image={props.img} />}
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
