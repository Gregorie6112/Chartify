import React from 'react';
import Plot from 'react-plotly.js';

const RenderChart = () => {
  let TESTER = document.getElementById('chartSection');
  return (
    <Plot
    data={[
      {
        x: [1, 2, 3],
        y: [2, 5, 3],
        type: 'scatter',
        marker: {color: 'black'},
      }
    ]}
    layout={{autosize: true}}
    config= {{responsive: true}}
    style= {{width: "100%", height: "100%"}}
    />
  )
};
export default RenderChart;
/*
Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Custom Range',
  xaxis: {
    range: ['2016-07-01', '2016-12-31'],
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [86.8700008333, 138.870004167],
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data, layout);
})
*/