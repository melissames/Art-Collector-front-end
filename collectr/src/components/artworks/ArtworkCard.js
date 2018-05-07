import React from 'react';
import { connect } from 'react-redux'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class ArtworkCard extends React.Component {

  handleClick = (id) => {
    console.log(id)
  }

  render(){
    return (
      <div className="btn-img">
        <div className="img-wrap">
          <img id={this.props.id}
            className='img'
            src={this.props.img} />
          <button onClick={() => this.handleClick(this.props.id)}>Add to Collection</button>
        </div>
      </div>
    )
  }
}

// dropdown 

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
