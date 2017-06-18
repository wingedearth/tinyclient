/** gets a new ID
 * @param {array} todos - array of objects
 * @returns {number} id
 */
function getId (todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

/** redux reduction
 * @param {array} todos - array of objects
 * @param {obj} action - action
 * @returns {void} nothing
 */
const todoReducer = function (todos = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [{
        text: action.text,
        completed: false,
        id: getId(todos)
      }, ...todos];
    case 'COMPLETE_TODO':
      return todos.map(todo =>
        (todo.id === action.id ? Object.assign({}, todo, {
          completed: !todo.completed}) : todo)
      );
    case 'DELETE_TODO':
      return todos.filter(todo => (todo.id !== action.id));
    default:
      return todos;
  }
};

export default todoReducer;
