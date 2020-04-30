var path = require('path');
var CLIENT_DIR = path.join(__dirname, '/client');
var PUB_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${CLIENT_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUB_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : CLIENT_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      }
    ]
  }
};