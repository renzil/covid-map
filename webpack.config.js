const path = require('path');
module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/js'),
  },
  devtool: 'source-map'
};