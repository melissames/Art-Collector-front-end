import React from 'react';
import ArtworkCard from './ArtworkCard'
import { connect } from 'react-redux'
import Slider from "react-slick";


class ArtworkSearch extends React.Component {

  mapSearchedArtworks = () => {
    if(this.props.submitted){
      if(this.props.artworkData[0]){
        return this.props.artworkData[0].map(artwork => <ArtworkCard key={artwork.id} id={artwork.id} img={artwork.img} />)
      }
    }
  }

  render(){
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return(
      <div className='artist'>
        <Slider {...settings}>
          {this.mapSearchedArtworks()}
        </Slider>
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
