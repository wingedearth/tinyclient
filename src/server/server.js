/* eslint no-console: 0 */
import express from 'express';
import router from './routes/router';
import path from 'path';

const server = express();
const defaultPort = 3000;
const port = defaultPort;

server.enable('strict routing');
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
