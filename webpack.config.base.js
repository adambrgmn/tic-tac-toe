const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

const env = {
  production: NODE_ENV === 'production',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined',
};

Object.assign(env, {
  build: (env.production || env.staging),
});

module.exports = {
  target: 'web',

  entry: [
    'babel-polyfill',
    './src/index.js',
  ],

  output: {
    path: path.join(process.cwd(), '/src'),
    pathInfo: true,
    publicPath: 'http://localhost:3000/src/',
    filename: 'main.js',
  },

  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectory: [
      'web_modules',
      'node_modules',
      'src',
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION: env.production,
      __CURRENT_ENV: `'${(NODE_ENV)}'`,
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded',
      },
    ],
    noParse: /\.min\.js/,
  },
};
