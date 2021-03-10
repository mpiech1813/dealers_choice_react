import React from 'react';

const NavBar = (props) => {
  const { goHome } = props;
  return (
    <div id="nav">
      <h2 onClick={() => goHome()}>Home</h2>
      <h2>Aliens</h2>
      <h2>Media</h2>
    </div>
  );
};

export default NavBar;
