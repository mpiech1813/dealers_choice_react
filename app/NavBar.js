import React from 'react';

const NavBar = (props) => {
  const { goHome, goAliens, aliens, media } = props;
  return (
    <div id="nav">
      <div>
        <h1>Dealer's Choice React</h1>
      </div>
      <div>
        <h2 onClick={() => goHome()}>Home</h2>
        <h2 onClick={() => goAliens()}>Aliens({aliens.length})</h2>
        <h2>Media({media.length})</h2>
      </div>
    </div>
  );
};

export default NavBar;
