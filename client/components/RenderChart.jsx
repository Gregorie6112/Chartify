import React from 'react';
import Plot from 'react-plotly.js';

const RenderChart = (props) => {
  return (
    <Plot
    data={[
      {
        x: props.x,
        y: props.y,
        type: 'scatter',
        mode: 'line',
        marker: {color: '#21a900'},
      }
    ]}
    layout={{
      autosize: true,
      plot_bgcolor: '#202020',
      paper_bgcolor: 'white',
      font: {
        family: 'Roboto, sans-serif',
        color: 'white'
      }
    }}
    config= {{responsive: true, scrollZoom: true}}
    style= {{width: "100%", height: "100%"}}
    />
  )
};
export default RenderChart;