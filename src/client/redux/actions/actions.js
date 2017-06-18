const actions = {
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
  },

  createNewUserIdIfOdd () {
    return (dispatch, getState) => {
      const {user} = getState();

      if (user.id % 2 === 0) {
        return;
      }
      dispatch(actions.createNewUserId());
    };
  },

  createNewUserIdAsync () {
    return dispatch => {
      setTimeout(() => {
        dispatch(actions.createNewUserId());
      }, 2500);
    };
  }
};

export default actions;
