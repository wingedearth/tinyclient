import React from 'react';

class TextDisplay extends React.Component {

  constructor (props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.deleteLetter();
  }

  render () {
    return (
      <div>
        <div>Here's what you typed: {this.props.text}</div>
        <button onClick={this.handleClick}>delete one letter</button>
      </div>
    );
  }
}

TextDisplay.propTypes = {
  deleteLetter: React.PropTypes.func,
  text: React.PropTypes.text
};

export default TextDisplay;
