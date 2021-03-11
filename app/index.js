//react will go here
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AliensList from './AliensList';
import SingleAlien from './SingleAlien';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      media: [],
      selectedAlien: {},
      home: true, //may need to remove this
      display: '',
    };
    this.selectAlien = this.selectAlien.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goAliens = this.goAliens.bind(this);
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

  goHome() {
    this.setState({ selectedAlien: {}, home: true });
    // this.setState({ display: '' });
  }

  goAliens() {
    this.setState({ home: false, selectedAlien: {} });
    // this.setState({ display: 'aliens' });
  }

  render() {
    const { aliens, selectedAlien, home, media, display } = this.state;
    return (
      <div>
        <NavBar
          goHome={this.goHome}
          goAliens={this.goAliens}
          aliens={aliens}
          media={media}
        />
        <div id="home">
          {selectedAlien.id ? (
            <SingleAlien selectedAlien={selectedAlien} />
          ) : !home ? (
            <AliensList
              aliens={aliens}
              selectAlien={this.selectAlien}
              goAliens={this.goAliens}
              display={display}
            />
          ) : (
            <Home aliens={aliens} />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*
        {!home ? (
          <SingleAlien selectedAlien={selectedAlien} />
        ) : (
          <AliensList aliens={aliens} selectAlien={this.selectAlien} />
        )}
*/

/*
{home ? (
  <Home aliens={aliens} />
) : selectedAlien.id ? (
  <SingleAlien selectedAlien={selectedAlien} />
) : (
  <AliensList
    aliens={aliens}
    selectAlien={this.selectAlien}
    goAliens={this.goAliens}
  />
)}
*/
