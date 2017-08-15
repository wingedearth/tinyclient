import {expect} from 'chai';
import versionController from '../../../src/server/controllers/version';
import pkg from '../../../package.json';

const res = {
  send (someObject) {
    return someObject;
  }
};

describe('Version Controller', function () {
  it('sends summary information about the app in the response', function () {
    expect(versionController({}, res).name).to.equal(pkg.name);
    expect(versionController({}, res).version).to.equal(pkg.version);
  });
});
