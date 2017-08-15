import React from 'react';
import PropTypes from 'prop-types';

class TextInput extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      inputText: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      inputText: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.addTodo(this.state.inputText);
  }

  render () {
    return (
      <div className='TextInput'>
        <div>TextInput Component</div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='textfield'
            onChange={this.handleChange}
            placeholder='Enter some text here.'
            type='text'
            value={this.state.inputText}
          />
        <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

TextInput.propTypes = {
  addTodo: PropTypes.func
};

export default TextInput;
