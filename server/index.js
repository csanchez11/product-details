const express = require('express');
const app = require('./app.js');

const port = 3010

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))


