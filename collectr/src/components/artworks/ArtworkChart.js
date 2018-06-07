import React from 'react';
import { connect } from 'react-redux';
import {Pie} from 'react-chartjs-2';


const ArtworkChart = props => {

    let chartColors = props.colors.map(color => '#' + color.hex)
    let chartData = props.colors.map(color => color.percent)

    const data={
      datasets: [{
        label: chartColors,
        data: chartData,
        backgroundColor: chartColors
      }]

  }

  const options={
    responsive: true,
    title:{
      display: true,
      text: "Most Prominent Colors",
      color: '#FFFFFF'
    },
    angleLines: '#000'
    }

    return (
      <div onClick={props.switch} style={{height: '100%', width: '100%', backgroundColor: '#000', position: 'relative'}}>
        <Pie data={data} height={280} width={300} options={options} />
      </div>
    )

}

const mapStateToProps = state => {
  return {
    colors: state.colorImage,
    colorLoading: state.colorLoading
  }
}

export default connect(mapStateToProps)(ArtworkChart);
