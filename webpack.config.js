const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './static/javascript'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,

        use: [{
          loader: 'babel-loader',

          options: {
            presets: [ 'es2015', 'react', 'stage-0' ]
        }
        }]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
  ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
