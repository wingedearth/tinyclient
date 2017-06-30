/* eslint no-console: 0 */
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import router from './routes/router';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const conf = require('../configuration/config').default();
const server = express();
const port = conf.server.port;
const compiler = webpack(webpackConfig);

server.enable('strict routing');
server.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig[1].output.publicPath
}));
server.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));
server.use(express.static(path.resolve(__dirname, '..')));
server.use(express.static(path.resolve(__dirname, '..', 'assets')));
server.use(express.static('./build'));
server.set('port', port);
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '..', 'src', 'assets', 'templates'));
require('ejs').delimiter = '%';

// Attach router
server.use('/', router);

server.listen(server.get('port'), exception => {
  if (exception) { throw exception; }
  console.log('A goblin-mage has conjured a server on port', port);
});
