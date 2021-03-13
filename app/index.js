import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AliensList from './AliensList';
import SingleAlien from './SingleAlien';
import NavBar from './NavBar';
import Home from './Home';
import MediaList from './MediaList';
// import '../public/style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      media: [],
      selectedAlien: {},
      home: '',
    };
    this.selectAlien = this.selectAlien.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goAliens = this.goAliens.bind(this);
    this.goMedia = this.goMedia.bind(this);
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
      const selectedAlien = (await axios.get(`/api/id/${alienId}`)).data;
      this.setState({ home: 'ALIEN', selectedAlien });
    } catch (error) {
      console.log(error);
    }
  }

  goHome() {
    this.setState({ selectedAlien: {}, home: 'HOME' });
  }

  goAliens() {
    this.setState({ selectedAlien: {}, home: 'ALIENS' });
  }

  goMedia() {
    this.setState({ selectedAlien: {}, home: 'MEDIA' });
  }

  render() {
    const { aliens, selectedAlien, home, media } = this.state;
    return (
      <div>
        <NavBar
          goHome={this.goHome}
          goAliens={this.goAliens}
          goMedia={this.goMedia}
          aliens={aliens}
          media={media}
        />
        <div id="mainDisplay">
          {(() => {
            switch (home) {
              case 'HOME':
                return <Home aliens={aliens} />;
              case 'ALIENS':
                return (
                  <AliensList
                    aliens={aliens}
                    selectAlien={this.selectAlien}
                    // goAlienDetail={this.goAlienDetail}
                  />
                );
              case 'ALIEN':
                return <SingleAlien selectedAlien={selectedAlien} />;
              case 'MEDIA':
                return <MediaList media={media} />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/* 

            // swtich statement
            // navigation component on state
            //
            selectedAlien.id ? (
              <SingleAlien selectedAlien={selectedAlien} />
            ) : !home ? (
              <AliensList
                aliens={aliens}
                selectAlien={this.selectAlien}
                goAliens={this.goAliens}
              />
            ) : (
              <Home aliens={aliens} />
            )
          
*/
/*{ <MediaList media={media} /> }*/
