import React from 'react';
// import { bindActionCreators } from 'redux'
// import { fetchCollections } from '../../actions/index.js';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
// import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import AddPhotoToCollectionDropdown from './AddPhotoToCollectionDropdown'

const CollectionsDropdown = props => {

  const handleClick = () => {
    console.log('eeeeeheheh')
  }
  // make the button a drop down so someone can choose which collection to add it to
  const makeOptions = () => {
    // let optionsArray = []
    //
    // return props.allCollections.map(collection => optionsArray << {value: collection.id.to_s, label: collection.name})
    // debugger
    //
    // return optionsArray
  }



    // console.log(props.allCollections)
    return (
      <div>
        {/* <button onClick={() => this.handleClick(this.props.id)}>Add to Collection</button> */}
        <Dropdown options={props.loading ? makeOptions() : null} onChange={handleClick} placeholder='PXL8'/>
      </div>
    )
}

// onClick={() => this.handleClick(this.props.id)} placeholder='Add to Collection'></Dropdown



const mapStateToProps = state => {
  return {
    // allCollections: state.allCollections,
    // loading: state.collectionLoading
    // loading: state.loading,
    // submitted: state.submitted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getAllCollections: bindActionCreators(fetchCollections, dispatch)
    // getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch),
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsDropdown);
