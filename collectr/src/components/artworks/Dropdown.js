import React from 'react';
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import AddPhotoToCollectionDropdown from './AddPhotoToCollectionDropdown'

class ArtworkCard extends React.Component {

  handleClick = (id) => {
    console.log(id)
  }
  // make the button a drop down so someone can choose which collection to add it to

  render(){
    // console.log(this.props.id)
    return (
      <div>
        {<Card
            key={this.props.key}
            id={this.props.id}
            image={this.props.img} />}
        {/* <button onClick={() => this.handleClick(this.props.id)}>Add to Collection</button> */}
        <AddPhotoToCollectionDropdown />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    saveArtworkCollection: state.saveArtworkCollection
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
