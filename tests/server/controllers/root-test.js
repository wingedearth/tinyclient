import {expect} from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import {
  renderToString,
  createStore,
  Provider,
  Home,
  reducers,
  res
} from './root.stub';

proxyquire.noCallThru();
proxyquire.noPreserveCache();

describe('Root Controller', function () {
  const ProxiedRoot = proxyquire('../../../src/server/controllers/root', {
    'react-dom/server': {renderToString},
    'redux': {createStore},
    'react-redux': {Provider},
    '../../client/components/Home': Home,
    '../../client/redux/reducers': reducers
  });
  const RootController = ProxiedRoot.default;
  const spy = sinon.spy(res, 'render');

  it('sends a response', function () {
    expect(RootController({}, res)).to.equal('success');
    expect(spy.calledOnce).to.equal(true);
  });
});
