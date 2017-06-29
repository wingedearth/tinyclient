/* eslint no-process-env: 0 */
import _ from 'lodash';
import defaultConf from './environment/default.json';
import production from './environment/production.json';

const conf = process.env.ENVIRONMENT === 'production' ?
_.merge({}, defaultConf, production)
: defaultConf;

export default (newConf = {}) => _.merge({}, conf, newConf);
