const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const port = 3010

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../public')))

app.get('/api', (req, res) => res.send("Hello World"))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))