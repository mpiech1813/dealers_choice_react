//react will go here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AliensList from './AliensList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
    };
  }

  async componentDidMount() {
    try {
      const aliens = (await axios.get('/api/aliens')).data;
      this.setState({ aliens });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { aliens } = this.state;
    return (
      <div>
        <h1>Dealers Choice React</h1>
        <h2>List of Aliens</h2>
        <AliensList aliens={aliens} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
