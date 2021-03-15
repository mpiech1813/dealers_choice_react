import React from 'react';

const Home = (props) => {
  const { aliens } = props;
  return (
    <div>
      <p>
        Welcom to the Xenomorph page. Currently there are {aliens.length} kinds
        of aliens described. Feel free to browse the list or add your own
      </p>
      <form>
        {/* <label for="name">Name:</label> */}
        <input type="text" id="name"></input>

        <select id="age">
          <option value="egg">Egg</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
        </select>

        <input type="text" id="size"></input>

        <input type="text" id="spec"></input>
      </form>
    </div>
  );
};

export default Home;
