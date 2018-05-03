import React from 'react';
import { connect }  from 'react-redux';
import { fetchArtworkSearch, fetchAllArtworks } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
import ArtworkList from '../artworks/ArtworkList.js'
import NavBar from '../../components/NavBar.js'

class MoodBoardsContainer extends React.Component {
  //
  // componentDidMount() {
  //   this.props.getAllArtworks()
  // }
  //
  // handleSubmit = event => {
  //   event.preventDefault();
  //
  //   this.props.getArtworkSearch(event.target.name.value)
  // }

  render(){
    return (
      <div className="MoodBoards">
        MOOOOOOD
        <NavBar />
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
