import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return (<html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <title>Tiny Client App</title>
      </head>
      <body>
        <div id="root"></div>
        {this.props.someData}
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>)
  }
}

module.exports = App;
