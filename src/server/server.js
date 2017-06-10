/* eslint no-console: 0 */
import express from 'express';
import router from './routes/router';
import path from 'path';
import webpack from 'webpack';
import fs from 'fs';

const server = express();
const defaultPort = 3000;
const port = defaultPort;
const indexFilePath = path.resolve('src', 'assets', 'templates', 'index.html');

// const mainIndex = require('../assets/templates/index.jsx');"<!DOCTYPE html>"
// const options = {
//   doctype: "<!DOCTYPE html>",
//   babel: true
// }

global.indexFile = '';

fs.readFile(indexFilePath, 'utf8', (err, data) => {
  if (err) {
    console.log('ERROR:', err.message);
    throw err;
  }
  global.indexFile = data;
});

server.enable('strict routing');
server.use(express.static(path.resolve(__dirname, '..')));
server.use(express.static(path.resolve(__dirname, '..', 'assets')));
server.use(express.static('./build'));
server.set('port', port);
// server.set('view engine', 'jsx');
// server.engine('jsx', require('express-react-views').createEngine(options));
console.log('__dirname:', __dirname);

server.use ('/', router);

server.listen(server.get('port'), function (exception) {
  if (exception) { throw exception; }
  console.log("A goblin-mage has conjured a server on port", port);
});
