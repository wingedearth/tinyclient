import mockComponent from '../../testUtils/mockComponent';

export const TextInput = mockComponent('TextInput');
export const TodoList = mockComponent('TodoList');
export const UserInfo = mockComponent('UserInfo');
export const styles = 'styles';
export const actions = {
  addTodo (text) {
    return {
      type: 'ADD_TODO',
      text
    };
  },

  completeTodo (id) {
    return {
      type: 'COMPLETE_TODO',
      id
    };
  },
  deleteTodo (id) {
    return {
      type: 'DELETE_TODO',
      id
    };
  },
  createNewUserId () {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    };
  }
};
export const todos = [{
  id: '12345',
  completed: false,
  text: 'Mock todo for testing'
}];

/**
 * mock functino for mapDispatchToProps
 * @returns {string} success message
 */
export function mapDispatchToProps () {
  return 'success';
}

/**
 * mock connect function for unit testing purposes.
 * @param {func} mapStateToProps - returns state
 * @param {func} mapDisToProps - returns actions
 * @returns {func} a function of Home component
 */
export function connect (mapStateToProps, mapDisToProps) {
  return function () {
    const state = mapDisToProps('something');

    return mapStateToProps(state);
  };
}

/**
 * mock redux function
 * @returns {string} something random
 */
export function bindActionCreators () {
  return 'hammertime';
}
