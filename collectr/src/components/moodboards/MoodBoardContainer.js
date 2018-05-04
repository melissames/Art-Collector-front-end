import React from 'react';
import { connect }  from 'react-redux';
import { fetchArtworkSearch, fetchAllArtworks } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
import NavBar from '../../components/NavBar.js'

class MoodBoardsContainer extends React.Component {

  render(){
    return (
      <div className="MoodBoards">
        <NavBar />
        MOOOOOOD
        {/* <ArtworkList /> */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allArtworks: state.allArtworks,
    artworkData: state.artworkSearch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch),
    getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodBoardsContainer);
