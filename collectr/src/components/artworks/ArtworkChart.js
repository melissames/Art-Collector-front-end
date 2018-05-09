import React from 'react';
import { connect } from 'react-redux';
import {Pie} from 'react-chartjs-2';
// import { fetchColorImage } from '../../actions/index.js';
// import { bindActionCreators } from 'redux'
// import Modal from 'react-modal';
// import PXL8Image from './PXL8Image.js'
// import PXL8Dropdown from './PXL8Dropdown'
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'


const ArtworkChart = props => {

  let chartColors = props.colors.map(color => '#' + color.hex)
  let chartData = props.colors.map(color => color.percent)

  const data={
    datasets: [{
      label: 'Colors',
      data: chartData,
      backgroundColor: chartColors
    }]
  }
          // labels: ['a','b','c','d','e','f','g','h','i']
        // height={300},
        // width={300},
  const options={
    responsive: true,
    title:{
    // {maintainAspectRatio: false}
      display: true,
      text: "Most Prominent Colors"
      }
    }

    // console.log(this.props.colors)
    return (
      <div style={{height: '250px', width: '250px', backgroundColor: 'black', position: 'relative'}}>
        {props.colorLoading ? <Pie data={data} height={300} width={300} options={options} /> : null}>
      </div>
    )

}

// dropdown

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

    // getColorImage: bindActionCreators(fetchColorImage, dispatch)
    // getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkChart);
