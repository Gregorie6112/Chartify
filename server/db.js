const mongoose = require('mongoose');
const URi = 'mongodb://localhost/chartify';

let connection = mongoose.connect(URi, {useNewUrlParser: true, useUnifiedTopology: true})
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