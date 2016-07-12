'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const compress = require('compression');
const layouts = require('express-ejs-layouts');

app.set('layout');
app.set('view engine', 'ejs');
app.set('view options', { layout: 'layout' });
app.set('views', path.join(process.cwd(), '/server/views'));

app.use(compress());
app.use(layouts);
app.use('/src', express.static(path.join(process.cwd(), '/src')));

app.disable('x-powered-by');

const env = {
  production: process.env.NODE_ENV === 'production',
};

if (env.production) {
  Object.assign(env, {
    assets: JSON.parse(fs.readFileSync(path.join(process.cwd(), 'assets.json'))),
  });
}

app.get('/*', (req, res) => {
  res.render('index', {
    env,
  });
});

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running at http://localhost:${port}, go refresh and see the magic happen.`);
});

if (env.production === false) {
  /* eslint-disable global-require */
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const webpackDevConfig = require('./webpack.config.development');

  new WebpackDevServer(webpack(webpackDevConfig), {
    publicPath: '/src/',
    contentBase: './src/',
    inline: true,
    hot: true,
    stats: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    },
  }).listen(3000, 'localhost', (err) => {
    if (err) console.log(err);
    console.log('Webpack Dev Server listening on http://localhost:3000');
  });
}
