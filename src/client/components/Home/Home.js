/* eslint jsx-quotes: 0 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import actions from '../../redux/actions';
import TextInput from '../Todo/TextInput';
import TodoList from '../Todo/TodoList';
import UserInfo from '../Todo/UserInfo';

class Home extends React.Component {

  static propTypes = {
    user: PropTypes.object,
    actions: PropTypes.object,
    todos: PropTypes.array
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (<div id="Home">
      <h1>Tiny Client app template with React</h1>
      <UserInfo actions={this.props.actions} user={this.props.user} />
      <TextInput addTodo={this.props.actions.addTodo}/><br/>
      <TodoList actions={this.props.actions} todos={this.props.todos} />
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
