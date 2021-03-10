//react will go here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AliensList from './AliensList';
import SingleAlien from './SingleAlien';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      media: [],
      selectedAlien: {},
    };
    this.selectAlien = this.selectAlien.bind(this);
  }

  async componentDidMount() {
    try {
      const aliens = (await axios.get('/api/aliens')).data;
      const media = (await axios.get('/api/media')).data;
      this.setState({ aliens, media });
    } catch (error) {
      console.log(error);
    }
  }

  async selectAlien(alienId) {
    try {
      const selectedAlien = (await axios.get(`/api/id/${alienId}`)).data; //may need to brek this down to res= and alien =res.data?
      this.setState({ selectedAlien });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { aliens, selectedAlien } = this.state;
    return (
      <div>
        <h1>Dealers Choice React</h1>
        <h2>List of Aliens</h2>
        {selectedAlien.id ? (
          <SingleAlien selectedAlien={selectedAlien} />
        ) : (
          <AliensList aliens={aliens} selectAlien={this.selectAlien} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
