const mongoose = require('mongoose');
const URI = 'mongodb://localhost/chartify';
const path = require('path');

let connection = mongoose.connect(process.env.MONGODB_URI || URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('connected')
})
.catch((err) => {
  console.log(err)
})

let createSchema = mongoose.Schema({
  ticker: String,
  xAxis: [],
  yAxis: [],
});

let Schema = mongoose.model('chart', createSchema);

module.exports = Schema;