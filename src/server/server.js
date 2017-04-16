/* eslint no-console: 0 */
const express = require('express');
const path = require('path');
const defaultPort = 3000;
const port = defaultPort;
const webpack = require('webpack');
const server = express();

server.enable('strict routing');

server.use(express.static(path.resolve(__dirname, '..')));
server.set('port', defaultPort);
server.use(express.static('./dist'));

server.use ('/', function(req, res) {
  res.render('index', '');
})

server.listen(server.get('port'), function (exception) {
  if (exception) { throw exception; }
  console.log("A goblin-mage has conjured a server on port", defaultPort);
});
