var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'eval',
  entry: {
    tagfield: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/tagfield'
    ],
    calendar: [
      './scripts/calendar'
    ],
    mdeditor: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/mdeditor'
    ],
    calculator: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/calculator'
    ],
    checkbox: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/checkbox'
    ],
    "image-accordion": [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/image-accordion'
    ],
    space: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/space'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].entry.js',
    publicPath: '/scripts/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loaders: ['react-hot', 'babel'],
      include: [path.join(__dirname, 'scripts')]
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer!less'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
