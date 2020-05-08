const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const helper = require('../DB/dbHelpers.js');

const app = express()
const port = 3010

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
})



app.listen(port, () => console.log(`App listening at http://localhost:${port}`))

// exporting for use in tests
module.exports = app;