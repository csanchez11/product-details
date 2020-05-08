const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const helper = require('../DB/dbHelpers.js');

const app = express()


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))


// This will retrieve and send a single product to page by selected by id
app.get('/products/:id', (req, res) => {

  helper.getProduct(req.params, (err, results) => {
    if (err) {console.error(err)}
    else {
      res.status(200).send(results[0])
    }
  })
});

// exporting for use in tests and in index.js
module.exports = app;