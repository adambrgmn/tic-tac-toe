import { join } from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import autoprefixer from 'autoprefixer';

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: join(__dirname, 'src'),
  build: join(__dirname, 'dist'),
  style: join(__dirname, 'src'),
  templates: join(__dirname, 'templates', 'index.jade'),
};

const common = {
  entry: {
    bundle: PATHS.app,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/',
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?cacheDirectory'],
        include: PATHS.app,
      },
      {
        test: /\.jade$/,
        loader: 'jade',
      },
    ],
  },
  postcss: () => [autoprefixer],
  sassLoader: {
    includePaths: PATHS.style,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.templates,
      appMountId: 'app',
      inject: false,
      title: 'Tic Tac Toe',
      subtitle: 'Try beat it...',
      description: 'An impossible to beat tic tac toe game',
    }),
  ],
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      posrt: process.env.PORT,
    },
    module: {
      loaders: [
        {
          test: /\.(scss|sass)$/,
          loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'],
          include: PATHS.app,
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', [
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ]),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('style.css'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.BROWSER': true,
        __DEV__: false,
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CleanPlugin([PATHS.build]),
    ],
  });
}
