import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 'egg',
      size: 'small',
      spec: '',
    };
  }

  render() {
    const { aliens, createAlien } = this.props;
    const { name, age, size, spec } = this.state;
    return (
      <div id="home">
        <p>
          Welcom to the Xenomorph page. Currently there are {aliens.length}{' '}
          kinds of aliens described. Feel free to browse the list or add your
          own
        </p>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            createAlien(name, age, size, spec);
            this.setState({ name: '', age: '', size: '', spec: '' });
          }}
        >
          {/* <label for="name">Name:</label> */}
          <label for="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(ev) => this.setState({ name: ev.target.value })}
          />

          <label for="age">Age: </label>
          <select
            id="age"
            value={age}
            onChange={(ev) => this.setState({ age: ev.target.value })}
          >
            <option value="egg">Egg</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
          </select>

          <label for="size">Size: </label>
          <select
            id="size"
            value={size}
            onChange={(ev) => this.setState({ size: ev.target.value })}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="huge">Huge</option>
          </select>

          <label for="spec">Special Ability: </label>
          <input
            type="text"
            id="spec"
            value={spec}
            onChange={(ev) => this.setState({ spec: ev.target.value })}
          ></input>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Home;
