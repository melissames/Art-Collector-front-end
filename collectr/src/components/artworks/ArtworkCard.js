import React from 'react';
import { connect } from 'react-redux'
import { fetchColorImage } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
import Modal from 'react-modal';
import ArtworkChart from './ArtworkChart.js'
// import PXL8Image from './PXL8Image.js'
import PXL8Dropdown from './PXL8Dropdown'
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'

// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

class ArtworkCard extends React.Component {

  state = {
    clicked: false
  }


  handleClick = id => {
    this.props.getColorImage(id)

    this.setState({clicked: true})
  }

  render(){
    return (
      <div className="btn-img">
        <div className="img-wrap">
          {this.state.clicked ?
            <ArtworkChart id={this.props.id} img={this.props.img}/>
            :
            <img onClick={() => this.handleClick(this.props.id)}
            id={this.props.id}
            className='img'
            src={this.props.img} />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colorImage,
    colorLoading: state.colorLoading
    // loading: state.loading,
    // submitted: state.submitted
  }
}

const mapDispatchToProps = dispatch => {
  return {

    getColorImage: bindActionCreators(fetchColorImage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkCard);
