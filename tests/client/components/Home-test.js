import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import jsdomify from 'jsdomify';
import {mount, render, shallow} from 'enzyme';
import proxyquire from 'proxyquire';
import {
  TextInput,
  TodoList,
  UserInfo,
  actions,
  styles,
  todos,
  bindActionCreators,
  // mapDispatchToProps,
  connect
} from './Home.stub';

const expect = chai.expect;

proxyquire.noCallThru();
proxyquire.noPreserveCache();
chai.use(chaiEnzyme());

describe('<Home />', function () {
  const ProxiedHome = proxyquire('../../../src/client/components/Home', {
    './Home.css': styles,
    '../../redux/actions': actions,
    '../Todo/TextInput': TextInput,
    '../Todo/TodoList': TodoList,
    '../Todo/UserInfo': UserInfo,
    'react-redux': {connect},
    'redux': {bindActionCreators}
  });
  const Home = ProxiedHome.Home;

  before(function () {
    jsdomify.create();
  });

  beforeEach(function () {
    jsdomify.clear();
  });
  after(function () {
    jsdomify.destroy();
  });

  it('renders a page', function () {
    const user = {username: 'Leonardo', id: '888'};
    const wrapper = mount(<Home
      actions={actions}
      todos={todos}
      user={user}
    />);

    expect(wrapper.find('TextInput')).to.have.length(1);
    expect(wrapper.find('TodoList')).to.have.length(1);
    expect(wrapper.find('UserInfo')).to.have.length(1);
  });
});
