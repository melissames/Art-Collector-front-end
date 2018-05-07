import React from 'react';
import ArtworkList from './ArtworkList.js';
import { connect } from 'react-redux';



class ArtworkData extends React.Component {

  unnestData = () => {
    let artGrid = this.props.allArtworks

    return artGrid.map(artworkArray => <ArtworkList key={artGrid.indexOf(artworkArray)} artworks={artworkArray} />)
  }

  render(){
    return(
        <div>
          {!this.props.submitted ? this.unnestData() : null}
        </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    submitted: state.submitted,
    allArtworks: state.allArtworks
  }
}

export default connect(mapStateToProps)(ArtworkData);
