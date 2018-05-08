import React from 'react';
import { connect }  from 'react-redux';
import { fetchCollections } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
import NavBar from '../../components/NavBar.js'
import CollectionForm from './CollectionForm.js'
import CollectionList from './CollectionList.js'

class CollectionsContainer extends React.Component {

  render(){
    return (
      <div className="Collections">
        <NavBar />
        <CollectionForm />
        <CollectionList />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // allCollections: state.allArtworks,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllCollections: bindActionCreators(fetchCollections, dispatch)
    // getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch)
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer);
