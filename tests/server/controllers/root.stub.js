import mockComponent from '../../testUtils/mockComponent';

/**
 * mock renderToString function
 * @param {string} someJsx - JSX for root of main React components
 * @returns {string} same string that was passed in
 */
export function renderToString (someJsx) {
  return someJsx;
}


/**
 * mock createStore function
 * @param {obj} someObject - a data object for the initial app state
 * @returns {obj} same object that was passed in
 */
export function createStore (someObject) {
  return someObject;
}

export const Provider = mockComponent('Provider');
export const Home = mockComponent('Home');
export const reducers = {};
export const res = {
  render (indx, data) {
    return 'success';
  }
};
