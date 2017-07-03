import React from 'react';
import createClass from 'create-react-class';

/**
 * Builds a mock React component
 * @param  {string} componentName name of the component to be mocked
 * @returns {func} mock React Component
 */
export default function (componentName) {
  return createClass({
    render () {
      return React.createElement(componentName);
    }
  });
}
