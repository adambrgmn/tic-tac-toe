/* eslint-disable global-require */
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const autoprefixer = require('autoprefixer');

exports.indexTemplate = (options) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      title: options.title,
      appMountId: options.appMountId,
      inject: false,
    }),
  ],
});

exports.loadJSX = (include) => ({
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel?cacheDirectory'],
        include,
      },
    ],
  },
});

exports.loadIsparta = (include) => ({
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['isparta'],
        include,
      },
    ],
  },
});

exports.lintJSX = (include) => ({
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include,
      },
    ],
  },
});

exports.enableReactPerformanceTools = () => ({
  module: {
    loaders: [
      {
        test: require.resolve('react'),
        loader: 'expose?React',
      },
    ],
  },
});

exports.devServer = (options) => {
  const ret = {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({ multiStep: true }),
    ],
  };

  if (options.poll) {
    ret.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
    };
  }

  return ret;
};

exports.setupCSS = (paths) => ({
  postcss: () => [autoprefixer],
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'resolve-url', 'sass?sourceMap'],
        include: paths,
      },
    ],
  },
});

exports.setupImages = (path) => ({
  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'file?name=img/[path][name].[ext]&context=./src/images',
        include: path.img,
      },
      {
        test: /\.ico$/,
        loader: 'file?name=[name].[ext]&context=./src',
        include: path.favicon,
      },
    ],
  },
});

exports.minify = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
  ],
});

exports.setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};

exports.extractBundle = (options) => {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],
        minChunks: Infinity,
      }),
    ],
  };
};

exports.clean = (path) => ({
  plugins: [
    new CleanWebpackPlugin([path], { root: process.cwd() }),
  ],
});

exports.extractCSS = (paths) => ({
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap'),
        include: paths,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
  ],
});

exports.npmInstall = (options) => {
  const opts = options || {};

  return {
    plugins: [new NpmInstallPlugin(opts)],
  };
};
