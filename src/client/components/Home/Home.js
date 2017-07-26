/* eslint jsx-quotes: 0 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import actions from '../../redux/actions';
import TextInput from '../Todo/TextInput';
import TodoList from '../Todo/TodoList';
import UserInfo from '../Todo/UserInfo';
require('./Home.scss');

const Nav = function (props) {
  return (<div className='navigation'>
    <div className='navcontainer'>
      <p>Tiny Client</p>
    </div>
  </div>);
};

const Banner = function (props) {
  return (<div className='banner'>
    <p className='bannerTitle'>Tiny Client!</p>
  </div>);
};


export class Home extends React.Component {

  static propTypes = {
    user: PropTypes.object,
    actions: PropTypes.object,
    todos: PropTypes.array
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (<div className='Home'>
      <Nav />
      <Banner />
      <div className='content'>
        <div className='leftcontent'>
          <UserInfo actions={this.props.actions} user={this.props.user} />
          <TextInput addTodo={this.props.actions.addTodo}/><br/>
        </div>
        <div className='rightcontent'>
          <TodoList actions={this.props.actions} todos={this.props.todos} />
        </div>
      </div>
    </div>);
  }
}

/** maps state to props
 * @param {obj} state - the state
 * @returns {obj} state - or some state key
 */
function mapStateToProps (state) {
  return state;
}

/** maps dispatch to props
 * @param {obj} dispatch - passed in from somewhere
 * @returns {obj} object with actions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
