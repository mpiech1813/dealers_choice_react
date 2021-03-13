import React from 'react';

const NavBar = (props) => {
  const { goHome, goAliens, goMedia, aliens, media } = props;
  return (
    <nav>
      <div>
        <h1>Dealer's Choice React</h1>
      </div>
      <div>
        <h2 onClick={() => goHome()}>Home</h2>
        <h2 onClick={() => goAliens()}>Aliens ({aliens.length})</h2>
        <h2 onClick={() => goMedia()}>Media ({media.length})</h2>
      </div>
    </nav>
  );
};

export default NavBar;
