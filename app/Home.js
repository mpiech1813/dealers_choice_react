import React from 'react';

const Home = (props) => {
  const { aliens } = props;
  return (
    <div>
      <p>
        Welcom to the Xenomorph page. Currently there are {aliens.length} kinds
        of aliens described. Feel free to browse the list or add your own
      </p>
    </div>
  );
};

export default Home;
