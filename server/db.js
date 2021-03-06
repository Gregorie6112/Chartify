const mongoose = require('mongoose');
// const URI = 'mongodb://localhost/chartify';
const URI = "mongodb+srv://gregorie:gregcal1@cluster0.f4nuw.mongodb.net/chartify?retryWrites=true&w=majority"
let connection = mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
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