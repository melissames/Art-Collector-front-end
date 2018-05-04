import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'



class ArtworkList extends React.Component {

  createArtworkCards = () => {
    return this.props.artworks.map(artwork => <ArtworkCard key={artwork.id} name={artwork.name} img={artwork.img} />)
  }

  render(){
    return(
      <div>
        {this.props.artworks.length ? this.props.artworks[0].name : null}
        {!this.props.submitted ? this.createArtworkCards() : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    submitted: state.submitted
  }
}

export default connect(mapStateToProps)(ArtworkList);
