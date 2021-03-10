import React from 'react';

const SingleAlien = (props) => {
  const { selectedAlien } = props;
  return (
    <div>
      <p>{selectedAlien.name}</p>
      <p>{selectedAlien.growth}</p>
      <p>{selectedAlien.size}</p>
      <p>{selectedAlien.ability}</p>
    </div>
  );
};

export default SingleAlien;
