/* eslint no-console: 0 */
import React from 'react';
import PropTypes from 'prop-types';

class UserInfo extends React.Component {

  static propTypes = {
    actions: PropTypes.object,
    user: PropTypes.object
  };

  constructor (props) {
    super(props);

    this.handleNewId = this.handleNewId.bind(this);
    this.handleNewIdIfOdd = this.handleNewIdIfOdd.bind(this);
    this.handleNewIdAsync = this.handleNewIdAsync.bind(this);
  }

  handleNewId () {
    this.props.actions.createNewUserId();
  }

  handleNewIdIfOdd () {
    this.props.actions.createNewUserIdIfOdd();
  }

  handleNewIdAsync () {
    this.props.actions.createNewUserIdAsync();
  }

  render () {
    return (
      <ul>
        <li>
          <div>username: {this.props.user.username}</div>
          <div>id: {this.props.user.id}</div>
          <button onClick={this.handleNewId}>Update with random ID</button>
          <button onClick={this.handleNewIdIfOdd}>Update ID if odd</button>
          <button onClick={this.handleNewIdAsync}>Update Async</button>
        </li>
      </ul>
    );
  }
}

export default UserInfo;
