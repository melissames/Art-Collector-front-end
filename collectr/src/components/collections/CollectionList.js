import React from 'react';
import { connect }  from 'react-redux';
// import NavBar from '../../components/NavBar.js'
// import CollectionForm from './CollectionForm.js'

class CollectionsList extends React.Component {

  showAllCollections = () => {
    if(this.props.loading){
      // console.log(this.props)

    }
  }

  render(){
    // console.log(this.props)
    return (
      <div className="Collections">
        {this.showAllCollections()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.collectionLoading,
    allCollections: state.allCollections

  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch)
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsList);
