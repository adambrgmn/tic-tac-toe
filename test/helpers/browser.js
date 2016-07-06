require('babel-register')();

process.env.NODE_ENV = 'test';

const jsdom = require('jsdom').jsdom;
const chai = require('chai');
const chaiImmutable = require('chai-immutable');

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

documentRef = document;
chai.use(chaiImmutable);
