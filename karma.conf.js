const webpackConfig = require('./webpack.config');

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'mocha',
    ],

    reporters: [
      'spec',
      'coverage',
    ],

    files: [
      'node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*.spec.*',
    ],

    preprocessors: {
      'test/**/*.spec.*': ['webpack', 'sourcemap'],
      'app/**/*.*': 'coverage',
    },

    browsers: [
      'PhantomJS',
    ],

    singleRun: true,

    coverageReporter: {
      reporters: [
        {
          type: 'lcovonly',
          subdir: '.',
        },
        {
          type: 'json',
          subdir: '.',
        },
        {
          type: 'html',
          subdir: '.',
        },
      ],
    },

    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
