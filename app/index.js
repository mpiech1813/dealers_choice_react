//react will go here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    state = {};
  }
  render() {
    return (
      <div>
        <h1>Dealers Choice React</h1>
        <h2>List of Aliens</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
