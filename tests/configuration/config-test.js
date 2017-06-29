/* eslint no-process-env: 0 */
/* eslint prefer-arrow-callback: 0 */
import {expect} from 'chai';
import requireUncached from 'require-uncached';


describe('configuration', function () {
  context('using default environment', function () {
    process.env.ENVIRONMENT = 'default';
    const conf = requireUncached('../../src/configuration/config').default();

    Reflect.deleteProperty(process.env, 'ENVIRONMENT');
    it('uses default config options by default', function () {

      expect(conf.server.port).to.equal(3000);
    });
  });

  context('using production environment', function () {
    process.env.ENVIRONMENT = 'production';
    const conf = requireUncached('../../src/configuration/config').default();

    Reflect.deleteProperty(process.env, 'ENVIRONMENT');
    it('uses production config options when process.env.ENVIRONMENT is set to production', function () {

      expect(conf.server.port).to.equal(5000);
    });
  });
});
