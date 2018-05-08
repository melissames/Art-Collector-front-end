import React from 'react';
import { connect } from 'react-redux'
import { fetchColorImage } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
// import PXL8Image from './PXL8Image.js'
import PXL8Dropdown from './PXL8Dropdown'
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'

class ArtworkCard extends React.Component {

  handleClick = id => {
    this.props.getColorImage(id)
    // console.log(this.props)
    // write method to colors backend in index & reducer
      // call that method here
    // make histogram function
      // render new artwork
  }

  render(){
    return (
      <div className="btn-img">
        <div className="img-wrap">
          <img onClick={() => this.handleClick(this.props.id)}
            id={this.props.id}
            className='img'
            src={this.props.img} />
          {/* <button onClick={() => this.handleClick(this.props.id)}>PXL8</button> */}
          {/* <PXL8Dropdown artwork_id={this.props.id}/> */}
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

    getColorImage: bindActionCreators(fetchColorImage, dispatch)
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkCard);
