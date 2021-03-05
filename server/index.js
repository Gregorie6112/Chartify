const PORT = 3000;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..', '/public')));
app.use(morgan('dev'));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log('Listening')
})