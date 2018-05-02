import React from 'react';
import { connect }  from 'react-redux';
import { fetchArtworkSearch, fetchAllArtworks } from '../actions/index.js';
import { bindActionCreators } from 'redux'
import ArtworkList from './ArtworkList.js'

class ArtworkContainer extends React.Component {

  componentDidMount() {
    this.props.getAllArtworks()
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.getArtworkSearch(event.target.name.value)
  }

  render(){
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='name' />
          <input type='submit' />
        </form>
        <ArtworkList />
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkContainer);





// to do: figure out how to fetch from backend from the same route to the same controller
// render all artwork then do search bar
