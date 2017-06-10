import path from 'path';
import pkg from '../../../package.json';
import _ from 'lodash';

function root(req, res) {
  const page = _.template(global.indexFile);
  res.send(page());
}

function version(req, res) {
  res.send({
    name: pkg.name,
    version: pkg.version
  });
}

export default {
  root,
  version
}
