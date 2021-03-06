const PORT = 3000;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const db = require('./db.js');

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/tickers', (req, res) => {
  db.find({})
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
});
app.post('/ticker', (req, res) => {
  db.create(req.body)
    .then(() => {
      res.status(200).send('posted')
    })
    .catch((err) => {
      res.status(400).send(err)
    })
});
app.put('/updateticker', (req, res) => {
  let ticker = req.body.ticker;
  let xAxis = req.body.xAxis;
  let yAxis = req.body.yAxis;
  db.findOneAndUpdate({ticker},{xAxis, yAxis})
    .then(() => {
      res.status(200).send('Updated')
    })
    .catch((err) => {
      res.status(400).send(err)
    })
});
app.listen(PORT, () => {
  console.log('Listening')
})