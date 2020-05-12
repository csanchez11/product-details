const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const helper = require('../DB/dbHelpers.js');
const cors = require('cors');

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));


// This will retrieve and send a single product to page by selected by id
app.get('/products/:id', (req, res) => {

  helper.getProduct(req.params, (err, results) => {
    if (err) {console.error(err)}
    else {
      res.status(200).send(results[0])
    }
  })
});

app.get('/bundle.js', (req, res) => {

  if (err) { console.error(err) }
  else {
    res.status(200).sendFile('./public');
  }
});



// exporting for use in tests and in index.js
module.exports = app;