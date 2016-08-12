const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: __dirname,
      query: {
        presets: ['es2015', 'react', 'react-hmre']
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!sass-loader'
    }]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  debug: true,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './app'
  }
};
