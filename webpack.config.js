const path = require('path')
const mode = 'production'
const devtool = 'source-map'
const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/react'],
    },
  },
}

module.exports = [
  {
    mode,
    entry: './server.js',
    output: {
      libraryTarget: 'umd', // Needed so that lambda can be `require`-d.
      path: path.resolve(__dirname, 'dist'),
      filename: 'server-bundle.js',
    },
    target: 'node',
    devtool,
    module: {
      rules: [jsLoader],
    },
  },
  {
    mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool,
    module: {
      rules: [jsLoader],
    },
  },
]
