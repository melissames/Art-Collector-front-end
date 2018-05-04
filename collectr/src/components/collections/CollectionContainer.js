import React from 'react';
import { connect }  from 'react-redux';
import NavBar from '../../components/NavBar.js'
import CollectionForm from './CollectionForm.js'

class CollectionsContainer extends React.Component {

  render(){
    return (
      <div className="Collections">
        <NavBar />
        <CollectionForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // allArtworks: state.allArtworks,
    collectionData: state.collectionSearch,
    submitted: state.submitted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch),
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer);
