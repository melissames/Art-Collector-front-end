import React from 'react';
import ArtworkCard from './ArtworkCard.js';
import { connect } from 'react-redux'
import Slider from "react-slick";



class ArtworkList extends React.Component {

  createArtworkCards = () => {
      return this.props.artworks.map(artwork => <ArtworkCard key={artwork.id} id={artwork.id} name={artwork.name} img={artwork.img} />)
  }

  render(){
    let settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return(
      <div>
      {this.props.artworks.length ? this.props.artworks[0].name : null}
      <Slider {...settings}>
        {this.createArtworkCards()}
      </Slider>
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
