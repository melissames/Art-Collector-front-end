import React from 'react';
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import ArtworkCollectionButton from './ArtworkCollectionButton.js'

class ArtworkCard extends React.Component {

  handleClick = (id) => {
    console.log(id)
  }

  render(){
    // console.log(this.props.id)
    return (
      <div>
        {<Card
            key={this.props.key}
            id={this.props.id}
            image={this.props.img} />}
        <button onClick={() => this.handleClick(this.props.id)}>Add to Collection</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // loading: state.loading,
    // submitted: state.submitted
  }
}

const mapDispatchToProps = dispatch => {
  return {

    // getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch),
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkCard);
