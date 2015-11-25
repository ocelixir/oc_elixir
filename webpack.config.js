var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './web/static/js/app.js',
  output: {
    path: './priv/static/js',
    filename: 'app.js'
  },
  loaders: [{
    test: /\.jsx?$/,
    exclude: /(node_modules)/,
    loader: 'babel'
  }, {
    test: /\.css$/,
    loader: 'style-loader!css-loader'
  }],
  alias: {
    phoenix: 'deps/phoenix/web/static/js/phoenix.js'
  }
};
