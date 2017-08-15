import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

  constructor (props) {
    super(props);

    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleComplete () {
    this.props.actions.completeTodo(this.props.todo.id);
  }

  handleDelete () {
    this.props.actions.deleteTodo(this.props.todo.id);
  }

  getCompletedStatus () {
    return this.props.todo.completed ? 'Completed' : 'Not Completed';
  }

  render () {
    return (
      <li className='TodoItem'>
        <div className='TodoText'>{this.props.todo.text}</div>
        <div className='TodoStatus'>{this.getCompletedStatus()}</div>
        <button onClick={this.handleComplete}>Mark as completed</button>
        <button onClick={this.handleDelete}>Delete Item</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  actions: PropTypes.object,
  todo: PropTypes.object
};

export default TodoItem;
