import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const ToDoList = props =>
    (<ul>
      {
        props.todos.map(todo =>
          <TodoItem actions={props.actions} key={todo.id} todo={todo} />
        )
      }
    </ul>);

ToDoList.propTypes = {
  todos: PropTypes.array,
  actions: PropTypes.object
};

export default ToDoList;
